import {Fragment, useState} from "react"
import "./UserAuthModal.scss"
import LoginAuth from "./LoginAuth"
import SignUpAuth from "./SignUpAuth"
import {useContext} from "react"
import AppContext from "../lib/AppContext"

const UserAuthModal = () => {
	const {userData} = useContext(AppContext)

	const [authType, setAuthType] = useState("signup")

	const handleAuthTypeSwitch = (ev) => {
		ev.preventDefault()
		setAuthType((prev) => (prev === "login" ? "signup" : "login"))
	}

	return (
		<div className="user-auth-modal-wrapper">
			<div className="user-auth-modal">
				<div className="logo-wrapper">
					<div className="logo">LOGO</div>
				</div>
				{!userData ? (
					<Fragment>
						{authType === "login" ? <LoginAuth /> : <SignUpAuth />}
						<a onClick={handleAuthTypeSwitch} className="alt-auth">
							{authType === "signup"
								? "Have an account? Login"
								: "Don't have an account? Sign Up"}
						</a>
					</Fragment>
				) : (
					<div className="logged-in-user">
						<div className="username"></div>
						<div className="user-email"></div>
						<form action="">
							<button type="submit">Log Out</button>
						</form>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserAuthModal
