import {Fragment, useContext, useEffect, useRef, useState} from "react"
import AppContext from "../lib/AppContext"
import {
	ActivityCheckIcon,
	ActivityIcon,
	HomeCheckIcon,
	HomeIcon,
	ProfileIcon,
} from "../lib/Icons"
import "./Header.scss"

function Header({setShowAuthModal}) {
	const {location, setLocation} = useContext(AppContext)

	return (
		<div className="header-wrapper">
			<div className="logo-wrapper">
				<div className="logo">LOGO</div>
			</div>
			<nav className="nav-wrapper">
				<span
					onClick={() => setLocation("home")}
					className={`nav-item ${location === "home" ? "active" : ""}`}
					id="nav-item-home"
				>
					{location === "home" ? <HomeCheckIcon /> : <HomeIcon />}
					<span className="text">Home</span>
				</span>
				<span
					onClick={() => setLocation("stats")}
					className={`nav-item ${location === "stats" ? "active" : ""}`}
					id="nav-item-stats"
				>
					{location === "stats" ? <ActivityCheckIcon /> : <ActivityIcon />}
					<span className="text">Stats</span>
				</span>
			</nav>
			<div className="user-profile-wrapper">
				<button
					onClick={() => setShowAuthModal(true)}
					className="profile-circle"
				>
					<ProfileIcon />
				</button>
			</div>
		</div>
	)
}

export default Header
