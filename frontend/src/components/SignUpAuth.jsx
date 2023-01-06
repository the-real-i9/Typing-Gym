import { useState } from "react"
import axios from 'axios'
import { storeToken } from "../lib/helpers"

const SignUpAuth = () => {
	const [usernameValue, setUsernameValue] = useState("")
	const [usernameError, setUsernameError] = useState("")

	const [emailValue, setEmailValue] = useState("")

	const [passwordValue, setPasswordValue] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const [confPasswordValue, setConfPasswordValue] = useState("")
	const [confPasswordError, setConfPasswordError] = useState("")

	const [loading, setLoading] = useState(false)

	const signupValidated = () => {
		let validated = true
		if (passwordValue !== confPasswordValue) {
			setConfPasswordError("Passwords do not match!")
			validated = false
		}
		if (usernameValue.length < 3) {
			setUsernameError("Username less than 3 characters.")
			validated = false
		}

		return validated
	}

	const handleUserSignUp = async (ev) => {
		ev.preventDefault()
		if (!signupValidated()) return

		setLoading(true)
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_STRAPI_HOST}/api/auth/local/register`,
				{
					username: usernameValue,
					email: emailValue,
					password: passwordValue,
				}
			)
			const {user, jwt} = res.data
			console.log(user)
			console.log(jwt)
			storeToken(jwt)

			setAuthType("login")
			setLoading(false)
		} catch (e) {
			console.log(e.response)
			setLoading(false)
		}
	}

	return (
		<div className="form-wrapper">
        <div className="form-title">Sign Up</div>
			<form action="">
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={usernameValue}
						onChange={(ev) => setUsernameValue(ev.target.value)}
						required
					/>
					<div className="error">{usernameError || ""}</div>
				</div>
				<div className="input-wrapper">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={emailValue}
						onChange={(ev) => setEmailValue(ev.target.value)}
						required
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={passwordValue}
						onChange={(ev) => setPasswordValue(ev.target.value)}
						required
					/>
					{passwordError ? (
						<div className="error">{passwordError}</div>
					) : (
						<div className="pass-req">Password requirement</div>
					)}
				</div>
				<div className="input-wrapper">
					<label htmlFor="conf-password">Confirm Password</label>
					<input
						type="password"
						name="conf-password"
						id="conf-password"
						value={confPasswordValue}
						onChange={(ev) => setConfPasswordValue(ev.target.value)}
						required
					/>
					<div className="error">{confPasswordError || ""}</div>
				</div>
				<button type="submit" onClick={handleUserSignUp}>
					Sign Up
				</button>
			</form>
		</div>
	)
}

export default SignUpAuth
