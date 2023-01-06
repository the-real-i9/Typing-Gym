import {useEffect, useState} from "react"
import "./App.scss"
import Stats from "./components/Stats"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"
import UserAuthModal from "./components/UserAuthModal"
import axios from "axios"
import { getToken } from "./lib/helpers"

function App() {
	const [location, setLocation] = useState("home")
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [userData, setUserData] = useState(null)

	const token = getToken()

	const fetchLoggedInUser = async (token) => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_HOST}/api/users/me`,{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setUserData(res.data)


		} catch(e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (token) {
			fetchLoggedInUser(token)
		}
	}, [token])
	
	return (
		<AppContext.Provider
			value={{location, setLocation, userData, setUserData}}
		>
			<div className="app-wrapper">
			{location !== 'gameplay' ? <Header setShowAuthModal={setShowAuthModal} /> : null}
				{location === "home" ? (
					<Home />
				) : location === "gameplay" ? (
					<GamePlay />
				) : location === "stats" ? (
					<Stats />
				) : null}
				{showAuthModal ? <UserAuthModal /> : null}
			</div>
		</AppContext.Provider>
	)
}

export default App
