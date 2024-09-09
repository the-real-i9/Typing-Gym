import { useContext, useState } from "react";
import AppContext from "../lib/AppContext";
import "./Home.scss";

function Home() {
  const {
    setLocation,
    selectedOption,
    setSelectedOption,
    randCommWordsMaxWordLength,
    setRandCommWordsMaxWordLength,
  } = useContext(AppContext);

  const [showOptionPanel, setShowOptionPanel] = useState(false);

  const handleOptionPanel = () => {
    setShowOptionPanel((prev) => !prev);
  };

  const handleOptionSelect = (ev) => {
    setSelectedOption(ev.target.id);
    setShowOptionPanel(false);
  };

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
            <button
              type="button"
              onClick={handleOptionPanel}
              className="selected-option"
            >
              {selectedOption === "rand-cw"
                ? "Random Words"
                : "Random Paragraphs"}
            </button>
            {showOptionPanel ? (
              <div className="options-panel">
                <div
                  role="none"
                  onClick={handleOptionSelect}
                  id="rand-cw"
                  className="rand-cw"
                >
                  Random Words
                </div>
                <div
                  role="none"
                  onClick={handleOptionSelect}
                  id="rand-pt"
                  className="rand-pt"
                >
                  Random Paragraphs
                </div>
              </div>
            ) : null}
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
  );
}

export default Home;
