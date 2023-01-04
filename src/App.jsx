import {useState} from "react"
import "./App.scss"
import Stats from "./components/Stats"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"

function App() {
	const [location, setLocation] = useState("home")
	const [beatSpeed, setBeatSpeed] = useState(10)
	const [gameState, setGameState] = useState("paused")
	
	return (
		<AppContext.Provider
			value={{location, setLocation, beatSpeed, setBeatSpeed, gameState, setGameState}}
		>
			<div className="app-wrapper">
				<Header />
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
