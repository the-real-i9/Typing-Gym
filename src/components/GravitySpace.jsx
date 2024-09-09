import {useEffect, useState} from "react"
import "./GravitySpace.scss"

const GravitySpace = ({
	typingSpeed,
	timeElapsed,
	setGameOver,
	setFinalGrvForce,
}) => {
	const [resPerc, setResPerc] = useState(0)

	const [{typForce, grvForce}, setForces] = useState({typForce: 0, grvForce: 0})

	useEffect(() => {
		if (timeElapsed === 0) return
		const gravityForcePerc = Math.trunc(Math.pow(timeElapsed / 10, 2))/*  + Math.trunc(typingSpeed / 10) */

		setForces({
			typForce: typingSpeed,
			grvForce: gravityForcePerc,
		})

		const rp = 50 + (-typingSpeed + gravityForcePerc)

		if (rp < 0) setResPerc(0)
		else if (rp > 100) {
			setResPerc(100)
			setGameOver(true)
			setFinalGrvForce(grvForce)
		} else setResPerc(rp)

	}, [typingSpeed, timeElapsed])
	return (
		<div className="gravity-space-wrapper">
			<div className="tff-value">T-Force: {typForce}N</div>
			<div className="space">
				<div className="ball" style={{top: `calc(${resPerc}% - 50px)`}}>
					<span className="middle">
						<span className="inner"></span>
					</span>
				</div>
			</div>
			<div className="egp-value">G-Force: {grvForce}N</div>
		</div>
	)
}

export default GravitySpace
