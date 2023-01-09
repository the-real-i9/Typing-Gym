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

export const fetchTodayUserStat = async (token, setTodayUserStat) => {
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

export const updateTodayStat = async (token, todayUserStat) => {
	try {
		const {id, avg_typing_speed, play_count} = todayUserStat
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
