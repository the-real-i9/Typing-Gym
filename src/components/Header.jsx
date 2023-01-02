import {useContext} from "react"
import AppContext from "../lib/AppContext"
import { ActivityIcon, HomeIcon, UserIcon } from "../lib/Icons"
import "./Header.scss"

function Header() {
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
			<div className="user-account-wrapper">
        <button className="user-circle">
          <UserIcon />
        </button>
      </div>
		</div>
	)
}

export default Header
