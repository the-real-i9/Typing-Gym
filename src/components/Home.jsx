import { useContext } from 'react'
import AppContext from '../lib/AppContext'
import './Home.scss'

function Home() {
  const { setLocation } = useContext(AppContext)

  return (
    <div className='home-wrapper'>
        <div className="left-wrapper">
          <div className='htgw-title'>How it works.</div>
          <p className='htgw-content'>How the game works will be displayed here.</p>
          <div className="user-actions">
            <button onClick={() => setLocation('gameplay')} className="start-game">Start Game</button>
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