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
	fetchTodayStat,
	updateTodayStat,
	updateUserStats,
} from "./lib/CRUDs"

function App() {
	const [location, setLocation] = useState("home")
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [userData, setUserData] = useState(null)
	const [todayStat, setTodayStat] = useState({ts: null, updateFlag: false})

	const token = getToken()

	useEffect(() => {
		if (token) fetchLoggedInUser(token, setUserData)
	}, [token])

	useEffect(() => {
		if (userData) fetchTodayStat({token, userId: userData.id, setTodayStat})
	}, [userData])

	useEffect(() => {
		if (todayStat.ts) {
			if (todayStat.updateFlag) updateTodayStat({token, todayStat: todayStat.ts})
			else updateUserStats({token, userData, todayStatId: todayStat.ts.id})
		}
	}, [todayStat])


	return (
		<AppContext.Provider value={{location, setLocation, userData }}>
			<div className="app-wrapper">
				{location !== "gameplay" ? (
					<Header setShowAuthModal={setShowAuthModal} />
				) : null}
				{location === "home" ? (
					<Home />
				) : location === "gameplay" ? (
					<GamePlay todayStat={todayStat} setTodayStat={setTodayStat} />
				) : location === "stats" ? (
					<Stats />
				) : null}
				{showAuthModal ? (
					<UserAuthModal setUserData={setUserData} setShowAuthModal={setShowAuthModal} />
				) : null}
			</div>
		</AppContext.Provider>
	)
}

export default App
