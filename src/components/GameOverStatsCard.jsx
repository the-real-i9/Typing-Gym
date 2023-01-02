import './GameOverStatsCard.scss'

function GameOverStatsCard() {
	return (
		<div className="gmosc-wrapper">
			<div className="gmo-text">Game Over</div>
			<div className="stats-card-wrapper">
				<div className="stats-card">
					<div className="sc-title">Stats</div>
					<div className='speed-gforce-group'>
						<div className="speed">
							Speed <br /> 40wpm
						</div>
                        <span></span>
						<div className="grav-force">
							G-Force <br /> 90N
						</div>
					</div>
					<div className="accuracy">Accuracy: 98%</div>
				</div>
			</div>
		</div>
	)
}

export default GameOverStatsCard
