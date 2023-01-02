import { useEffect, useState } from 'react'
import './GamePlay.scss'

function GamePlay() {
  const [paragraphText, setParagraphText] = useState('')

  useEffect(() => {
    /* So how... */

  }, [])

  return (
    <div className='gameplay-wrapper'>
        <div className="paragraph-text-wrapper">
          <p>Passage will display here...</p>
        </div>
        <div className="gravity-ball-wrapper">
          <div className="typing-force-field">
            <div className='tff-value'>25N</div>
            <div></div>
          </div>
          <div className="earth-grav-pull">
          <div></div>
          <div className="egp-value">50N</div>
          </div>
        </div>
    </div>
  )
}

export default GamePlay