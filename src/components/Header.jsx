import {Fragment, useContext} from "react"
import AppContext from "../lib/AppContext"
import {ActivityIcon, HomeIcon, PauseIcon, ProfileIcon, StopIcon} from "../lib/Icons"
import "./Header.scss"

function Header() {
	const {location, setLocation} = useContext(AppContext)

	return (
		<div className="header-wrapper">
			<div className="logo-wrapper">
				<div className="logo">LOGO</div>
			</div>
			{location === "gameplay" ? (
				<div className="game-rel">
					<div className="clock">
						Time:
						<span className="time-count">00:00</span>
					</div>
					<div className="game-controls">
						<button className="play-pause">
							<PauseIcon />
						</button>
						<button className="stop">
							<StopIcon />
						</button>
					</div>
				</div>
			) : (
				<Fragment>
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
							onClick={() => setLocation("analytics")}
							className={`nav-item ${location === "analytics" ? "active" : ""}`}
							id="nav-item-analytics"
						>
							<ActivityIcon />
							<span className="text">Analytics</span>
						</span>
					</nav>
					<div className="user-profile-wrapper">
						<button className="profile-circle">
							<ProfileIcon />
						</button>
					</div>
				</Fragment>
			)}
		</div>
	)
}

export default Header
