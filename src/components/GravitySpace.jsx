import { useContext, useEffect, useState } from "react"
import AppContext from "../lib/AppContext"
import './GravitySpace.scss'

const GravitySpace = ({typingSpeed, timeElapsed, setGameOver, setFinalTypForce}) => {
    const { beatSpeed } = useContext(AppContext)

    const [resPerc, setResPerc] = useState(0)

    const [{ typForce, grvForce }, setForces] = useState({ typForce: 0, grvForce: 0 })

    useEffect(() => {
        const typingSpeedPerc = (typingSpeed * 1) / ((beatSpeed + 10) / 100)
        const gravityForcePerc = (timeElapsed * 1) / 0.5

        setForces({ typForce: Math.trunc(typingSpeedPerc / 10), grvForce: Math.trunc(gravityForcePerc / 10) })

        const rp = -typingSpeedPerc + gravityForcePerc
        if (rp < 0) setResPerc(0)
        else if (rp > 100) {
            setResPerc(100)
            setGameOver(true)
            setFinalTypForce(typForce)
        }
        else setResPerc(rp)

    }, [typingSpeed, timeElapsed])
	return (
		<div className="gravity-space-wrapper">
			<div className="tff-value">T-Force: {typForce}N</div>
			<div className="space">
				<div className="ball" style={{ top: `calc((0% + ${resPerc}%) - 50px)` }}>
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
