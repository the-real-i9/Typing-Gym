import {useContext} from "react"
import AppContext from "../lib/AppContext"
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
					Home
				</span>
				<span
					onClick={() => setLocation("analytics")}
					className={`nav-item ${location === "analytics" ? "active" : ""}`}
					id="nav-item-analytics"
				>
					Analytics
				</span>
			</nav>
			<div className="user-account-wrapper">
        
      </div>
		</div>
	)
}

export default Header
