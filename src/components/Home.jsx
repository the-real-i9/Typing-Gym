import { useContext } from "react"
import AppContext from "../lib/AppContext"
import "./Home.scss"

function Home() {
  const {
    setLocation,
    selectedOption,
    setSelectedOption,
    randCommWordsMaxWordLength,
    setRandCommWordsMaxWordLength,
  } = useContext(AppContext)

  return (
    <div className="home-wrapper">
      <div className="left-wrapper">
        <div className="htgw-title">How it works.</div>
        <p className="htgw-content">
          How the game works will be displayed here.
        </p>
        <div className="user-actions">
          <div className="selector-wrapper">
            <p>Choose an Option</p>
            <select
              className="selected-option"
              defaultValue={selectedOption}
              onChange={(ev) => setSelectedOption(ev.target.value)}
            >
              <option value="rand-cw">Random Words</option>
              <option value="rand-pt">Random Paragraphs</option>
            </select>
          </div>
          {selectedOption === "rand-cw" ? (
            <div className="max-word-wrapper">
              <p>Set max word length</p>
              <input
                type="number"
                min="5"
                value={randCommWordsMaxWordLength}
                onChange={(ev) =>
                  setRandCommWordsMaxWordLength(ev.target.value)
                }
              />
            </div>
          ) : null}
          <button
            type="button"
            onClick={() => setLocation("gameplay")}
            className="start-game"
          >
            Start Game
          </button>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="br-title">Your best result</div>
        <div className="br-table" />
      </div>
    </div>
  )
}

export default Home
