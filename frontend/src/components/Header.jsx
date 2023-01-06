import {Fragment, useContext, useEffect, useRef, useState} from "react"
import AppContext from "../lib/AppContext"
import {ActivityIcon, HomeIcon, PauseIcon, PlayIcon, ProfileIcon, StopIcon} from "../lib/Icons"
import "./Header.scss"

function Header() {
	const {location, setLocation, gameState, setGameState } = useContext(AppContext)
	const formatTimeNum = (timeNum) => new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(timeNum)

	const [{ currMin, currSec }, setCurrTime] = useState({ currMin: 0, currSec: 0 })

	const timeElapsed = useRef(0)

	const gameStopped = () => {
		timeElapsed.current = 0
		setGameState('paused')
		setCurrTime({ currMin: 0, currSec: 0 })
		setLocation('home')
	}

	useEffect(() => {
		if (location === 'stats') {
			timeElapsed.current = 0
			setCurrTime({ currMin: 0, currSec: 0 })
		}
	}, [location])

	useEffect(() => {
		const intv = setInterval(() => {
			if (gameState === 'paused') return
			timeElapsed.current++

			setCurrTime(() => {
				const currTime = timeElapsed.current / 60
				const currMin = Math.trunc(currTime)
				const currSec = (currTime - currMin) * 60

				return { currMin, currSec }
			})
		}, 1000)

		return () => {
			clearInterval(intv)
		}
	}, [gameState])

	return (
		<div className="header-wrapper">
			<div className="logo-wrapper">
				<div className="logo">LOGO</div>
			</div>
			{location === "gameplay" ? (
				<div className="game-rel">
					<div className="clock">
						Time:
						<span className="time-count">{`${formatTimeNum(currMin)}:${formatTimeNum(currSec)}`}</span>
					</div>
					<div className="game-controls">
						<button className="play-pause" onClick={() => setGameState(gameState === 'playing' ? "paused" : "playing")}>
							{gameState === 'playing' ? <PauseIcon /> : <PlayIcon />}
						</button>
						<button className="stop" onClick={gameStopped}>
							<StopIcon />
						</button>
					</div>
				</div>
			) : (
				<Fragment>
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
							onClick={() => setLocation("stats")}
							className={`nav-item ${location === "stats" ? "active" : ""}`}
							id="nav-item-stats"
						>
							<ActivityIcon />
							<span className="text">Stats</span>
						</span>
					</nav>
					<div className="user-profile-wrapper">
						<button className="profile-circle">
							<ProfileIcon />
						</button>
					</div>
				</Fragment>
			)}
		</div>
	)
}

export default Header
