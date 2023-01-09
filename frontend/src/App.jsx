import {useEffect, useState} from "react"
import "./App.scss"
import Stats from "./components/Stats"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"
import UserAuthModal from "./components/UserAuthModal"

import {getToken} from "./lib/helpers"
import {
	fetchLoggedInUser,
	fetchTodayUserStat,
	updateTodayStat,
} from "./lib/CRUDs"

function App() {
	const [location, setLocation] = useState("home")
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [userData, setUserData] = useState(null)
	const [todayUserStat, setTodayUserStat] = useState(null)

	const token = getToken()

	useEffect(() => {
		if (token) fetchLoggedInUser(token, setUserData)
	}, [token])

	useEffect(() => {
		if (userData) fetchTodayUserStat(token, setTodayUserStat)
	}, [userData])

	useEffect(() => {
		// update user stat
		if (todayUserStat) updateTodayStat(token, todayUserStat)
	}, [todayUserStat])

	return (
		<AppContext.Provider value={{location, setLocation, userData, setUserData}}>
			<div className="app-wrapper">
				{location !== "gameplay" ? (
					<Header setShowAuthModal={setShowAuthModal} />
				) : null}
				{location === "home" ? (
					<Home />
				) : location === "gameplay" ? (
					<GamePlay />
				) : location === "stats" ? (
					<Stats />
				) : null}
				{showAuthModal ? (
					<UserAuthModal setShowAuthModal={setShowAuthModal} />
				) : null}
			</div>
		</AppContext.Provider>
	)
}

export default App
