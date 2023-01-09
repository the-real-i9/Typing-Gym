import {Fragment, useState} from "react"
import "./UserAuthModal.scss"
import LoginAuth from "./LoginAuth"
import SignUpAuth from "./SignUpAuth"
import {useContext} from "react"
import AppContext from "../lib/AppContext"
import {deleteToken} from "../lib/helpers"
import {CloseIcon} from "../lib/Icons"
import {fetchLoggedInUser, uploadProfilePicture} from "../lib/CRUDs"
import {host} from "../lib/helpers"

const UserAuthModal = ({setShowAuthModal, setUserData}) => {
	const {userData} = useContext(AppContext)

	const [authType, setAuthType] = useState("signup")

	const handleAuthTypeSwitch = (ev) => {
		ev.preventDefault()
		setAuthType((prev) => (prev === "login" ? "signup" : "login"))
	}

	const handleProfilePicUpload = async (ev) => {
		const url = URL.createObjectURL(ev.target.files[0])
		document.querySelector(
			".user-profile-pic"
		).style.background = `url(${url}) center/cover no-repeat`

		const formData = new FormData()
		formData.append("files", ev.target.files[0], `pp_${userData.username}`)
		formData.append("field", "profile_pic")
		formData.append("ref", "plugin::users-permissions.user")
		formData.append("refId", userData.id)

		uploadProfilePicture({userData, formData})
		fetchLoggedInUser(setUserData)
	}

	const handleUserLogout = (ev) => {
		ev.preventDefault()

		deleteToken()
		window.location.reload()
	}

	return (
		<div className="user-auth-modal-wrapper">
			<div className="user-auth-modal">
				{!userData ? (
					<Fragment>
						<div className="logo-wrapper">
							<div className="logo">LOGO</div>
						</div>
						{authType === "login" ? <LoginAuth /> : <SignUpAuth />}
						<a onClick={handleAuthTypeSwitch} className="alt-auth">
							{authType === "signup"
								? "Have an account? Login"
								: "Don't have an account? Sign Up"}
						</a>
					</Fragment>
				) : (
					<div className="logged-in-user">
						<div className="user-profile-pic-wrapper">
							<div
								className="user-profile-pic"
								style={{
									background: `url(${host}${userData.profile_pic.url}) center/cover no-repeat`,
								}}
							>
								{/* The upload circle */}
								<input
									type="file"
									onChange={handleProfilePicUpload}
									accept=".jpg, .jpeg, .png"
									multiple={false}
								/>
							</div>
						</div>
						<div className="username">{userData.username}</div>
						<div className="user-email">{userData.email}</div>
						<form action="#" onSubmit={handleUserLogout}>
							<button type="submit">Log Out</button>
						</form>
					</div>
				)}
			</div>
			<div className="close-button-wrapper">
				<button
					onClick={() => setShowAuthModal(false)}
					className="close-button"
				>
					<CloseIcon />
				</button>
			</div>
		</div>
	)
}

export default UserAuthModal
