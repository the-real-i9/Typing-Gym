import {useContext} from "react"
import AppContext from "../lib/AppContext"
import "./GameOverStatsCard.scss"

function GameOverStatsCard({typingSpeed, finalTypForce, typAccuracy}) {
	const {setLocation} = useContext(AppContext)
	return (
		<div className="gmosc-wrapper">
			<div className="gmo-text">Game Over</div>
			<div className="stats-card-wrapper">
				<div className="stats-card">
					<div className="sc-title">Result</div>
					<div className="speed-gforce-group">
						<div className="speed">
							<div className="label">Speed</div>
							<div className="value">
								{typingSpeed}
								<small>(wpm)</small>
							</div>
						</div>
						<span></span>
						<div className="grav-force">
							<div className="label">T-Force</div>
							<div className="value">
								{finalTypForce}
								<small>(new.)</small>
							</div>
						</div>
					</div>
					<div className="accuracy">
						Accuracy: <span>{typAccuracy}%</span>
					</div>
					<button onClick={() => setLocation('stats')} className="view-stats">View Stats</button>
				</div>
			</div>
		</div>
	)
}

export default GameOverStatsCard
