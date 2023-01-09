import axios from "axios"
import qs from "qs"

import {host} from "./helpers"

export const fetchLoggedInUser = async (token, setUserData) => {
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

export const createTodayStat = async ({token, userId, typingSpeed}) => {
	try {
		await axios.post(
			`${host}/api/stats`,
			{
				data: {
					own_user: userId,
					date: new Date(),
					avg_typing_speed: typingSpeed,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
	} catch (e) {
		console.log(e)
	}
}

export const fetchTodayStat = async ({token, userId, setTodayStat}) => {
	try {
		const res = await axios.get(
			`${host}/api/stats?${qs.stringify(
				{
					filters: {
						own_user: {
							id: {
								$eq: userId,
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
		setTodayStat((prev) => {
			return {...prev, ts: {id, avg_typing_speed, play_count}}
		})
	} catch (e) {
		console.log(e)
	}
}

export const updateUserStats = async ({token, userData, todayStatId}) => {
	try {
		await axios.put(
			`${host}/api/users/${userData.id}`,
			{
				data: {
					stats: [...userData.stats, todayStatId],
				},
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
	} catch (e) {
		console.log(e)
	}
}

export const updateTodayStat = async ({token, todayStat}) => {
	try {
		const {id, avg_typing_speed, play_count} = todayStat
		await axios.put(
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
