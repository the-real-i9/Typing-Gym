import "./GameOverStatsCard.scss"

function GameOverStatsCard() {
	return (
		<div className="gmosc-wrapper">
			<div className="gmo-text">Game Over</div>
			<div className="stats-card-wrapper">
				<div className="stats-card">
					<div className="sc-title">Result</div>
					<div className="speed-gforce-group">
						<div className="speed">
							<div className="label">Speed</div>
							<div className="value">40<small>(wpm)</small></div>
						</div>
						<span></span>
						<div className="grav-force">
							<div className="label">G-Force</div>
							<div className="value">90<small>(new.)</small></div>
						</div>
					</div>
					<div className="accuracy">Accuracy: <span>98%</span></div>
                    <button className="view-stats">View Stats</button>
				</div>
			</div>
		</div>
	)
}

export default GameOverStatsCard
