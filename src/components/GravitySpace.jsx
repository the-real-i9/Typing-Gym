import { useContext, useEffect, useState } from "react"
import AppContext from "../lib/AppContext"
import './GravitySpace.scss'

const GravitySpace = ({typingSpeed, timeElapsed}) => {
    const { beatSpeed } = useContext(AppContext)

    // const [typingSpeedPerc, setTypingSpeedPerc] = useState(0)
    // const [gravForcePerc, setGravForcePerc] = useState(0)
    
    const [resPerc, setResPerc] = useState(0)

    useEffect(() => {
        const tsp = (typingSpeed * 1) / ((beatSpeed + 10) / 100)
        const gfp = (timeElapsed * 1) / 0.5

        const rp = -tsp + gfp
        if (rp < 0) setResPerc(0)
        else if (rp > 100) setResPerc(100)
        else setResPerc(rp)

    }, [typingSpeed, timeElapsed])
	return (
		<div className="gravity-space-wrapper">
			<div className="tff-value">25N</div>
			<div className="space">
				<div className="ball" style={{ top: `calc((0% + ${resPerc}%))` }}>
					<span className="middle">
						<span className="inner"></span>
					</span>
				</div>
			</div>
			<div className="egp-value">50N</div>
		</div>
	)
}

export default GravitySpace
