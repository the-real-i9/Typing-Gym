import { useState } from 'react'
import './Home.scss'

function Home() {
  const [beatSpeed, setBeatSpeed] = useState(10)

  return (
    <div className='home-wrapper'>
        <div className="left-wrapper">
          <div className='htgw-title'>How it works.</div>
          <p className='htgw-content'>How the game works will be displayed here.</p>
          <div className="user-actions">
            <div className="set-beat-speed">
              <div>Set Beat speed</div>
              <div>What typing speed<em>(wpm)</em> would you like to beat?</div>
              <input type="number" className='beat-speed-input' value={beatSpeed} onChange={(ev) => setBeatSpeed(ev.target.value)} />
            </div>
            <button className="start-game">Start Game</button>
          </div>
        </div>
        <div className="right-wrapper">
          <div className='br-title'>Your best result</div>
          <div className="br-table">

          </div>
        </div>
    </div>
  )
}

export default Home