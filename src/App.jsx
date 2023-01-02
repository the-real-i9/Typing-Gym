import {useState} from "react"
import "./App.scss"
import Stats from "./components/Stats"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"

function App() {
	const [location, setLocation] = useState("home")

	return (
		<AppContext.Provider value={{location, setLocation}}>
			<div className="app-wrapper">
				{!["gameplay"].includes(location) ? <Header /> : null}
				{location === "home" ? (
					<Home />
				) : location === "gameplay" ? (
					<GamePlay />
				) : location === "stats" ? (
					<Stats />
				) : null}
			</div>
		</AppContext.Provider>
	)
}

export default App
