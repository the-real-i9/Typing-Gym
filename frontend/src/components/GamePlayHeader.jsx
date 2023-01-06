import {useContext} from "react"
import AppContext from "../lib/AppContext"
import {PauseIcon, PlayIcon, StopIcon} from "../lib/Icons"
import "./GameOverStatsCard.scss"

const GamePlayHeader = ({timeElapsed, setTimeElapsed}) => {
	const {gameState, setGameState} = useContext(AppContext)

	const formatTimeNum = (timeNum) =>
		new Intl.NumberFormat("en-US", {minimumIntegerDigits: 2}).format(timeNum)

	const [{currMin, currSec}, setCurrTime] = useState({currMin: 0, currSec: 0})

	const gameStopped = () => {
		setTimeElapsed(0)
		setGameState("paused")
		setCurrTime({currMin: 0, currSec: 0})
		setLocation("home")
	}

	useEffect(() => {
		setCurrTime({currMin: 0, currSec: 0})
	}, [gameOver])

	useEffect(() => {
		setCurrTime(() => {
			const currTime = timeElapsed / 60
			const currMin = Math.trunc(currTime)
			const currSec = (currTime - currMin) * 60

			return {currMin, currSec}
		})
	}, [timeElapsed])

	return (
		<div className="header-wrapper">
			<div className="logo-wrapper">
				<div className="logo">LOGO</div>
			</div>
			<div className="game-rel">
				<div className="clock">
					Time:
					<span className="time-count">{`${formatTimeNum(
						currMin
					)}:${formatTimeNum(currSec)}`}</span>
				</div>
				<div className="game-controls">
					<button
						className="play-pause"
						onClick={() =>
							setGameState(gameState === "playing" ? "paused" : "playing")
						}
					>
						{gameState === "playing" ? <PauseIcon /> : <PlayIcon />}
					</button>
					<button className="stop" onClick={gameStopped}>
						<StopIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default GamePlayHeader
