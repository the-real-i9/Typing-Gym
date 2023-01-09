import {Fragment, useState} from "react"
import "./UserAuthModal.scss"
import LoginAuth from "./LoginAuth"
import SignUpAuth from "./SignUpAuth"
import {useContext} from "react"
import AppContext from "../lib/AppContext"
import { deleteToken } from "../lib/helpers"
import { CloseIcon } from "../lib/Icons"

const UserAuthModal = ({ setShowAuthModal }) => {
	const {userData} = useContext(AppContext)

	const [authType, setAuthType] = useState("signup")

	const handleAuthTypeSwitch = (ev) => {
		ev.preventDefault()
		setAuthType((prev) => (prev === "login" ? "signup" : "login"))
	}

	const handleUserLogout = (ev) => {
		ev.preventDefault()

		deleteToken()
		window.location.reload()
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
						<div className="username">{userData.username}</div>
						<div className="user-email">{userData.email}</div>
						<form action="#" onSubmit={handleUserLogout}>
							<button type="submit">Log Out</button>
						</form>
					</div>
				)}
			</div>
			<div className="close-button-wrapper">
				<button onClick={() => setShowAuthModal(false)} className="close-button">
					<CloseIcon />
				</button>
			</div>
		</div>
	)
}

export default UserAuthModal
