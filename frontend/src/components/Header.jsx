import {Fragment, useContext, useEffect, useRef, useState} from "react"
import AppContext from "../lib/AppContext"
import {
	ActivityIcon,
	HomeIcon,
	ProfileIcon,
} from "../lib/Icons"
import "./Header.scss"

function Header() {
	const {location, setLocation} =
		useContext(AppContext)
	

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
					<HomeIcon />
					<span className="text">Home</span>
				</span>
				<span
					onClick={() => setLocation("stats")}
					className={`nav-item ${location === "stats" ? "active" : ""}`}
					id="nav-item-stats"
				>
					<ActivityIcon />
					<span className="text">Stats</span>
				</span>
			</nav>
			<div className="user-profile-wrapper">
				<button className="profile-circle">
					<ProfileIcon />
				</button>
			</div>
		</div>
	)
}

export default Header
