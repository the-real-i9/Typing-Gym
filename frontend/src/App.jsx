import {useEffect, useState} from "react"
import "./App.scss"
import Stats from "./components/Stats"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"
import UserAuthModal from "./components/UserAuthModal"
import axios from "axios"
import {getToken, host} from "./lib/helpers"
import qs from "qs"

function App() {
	const [location, setLocation] = useState("home")
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [userData, setUserData] = useState(null)
	const [todayUserStat, setTodayUserStat] = useState(null)

	const token = getToken()

	const fetchLoggedInUser = async (token) => {
		try {
			const res = await axios.get(`${host}/api/users/me`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			setUserData(res.data)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (token) fetchLoggedInUser(token)
	}, [token])

	const fetchTodayUserStat = async (token) => {
		try {
			const res = await axios.get(
				`${host}/api/stats?${qs.stringify(
					{
						filters: {
							own_user: {
								id: {
									$eq: userData.id,
								},
							},
							date: {
								$eq: new Date(),
							},
						},
					},
					{
						encodeValuesOnly: true,
					}
				)}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			const {
				id,
				attributes: {avg_typing_speed, play_count},
			} = res.data.data[0]
			setTodayUserStat({id, avg_typing_speed, play_count})
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (userData) fetchTodayUserStat(token)
	}, [userData])

	const updateTodayStat = async (token) => {
		try {
			const {id, avg_typing_speed, play_count} = todayUserStat
			const res = await axios.put(
				`${host}/api/stats/${id}`,
				{
					data: {
						avg_typing_speed,
						play_count,
					},
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			// console.log(res.data)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		// update user stat
		if (todayUserStat) updateTodayStat(token)
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
