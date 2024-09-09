import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import AppContext from "../lib/AppContext";
import paragraphTexts from "../lib/paragraph-texts";
import commWords from "../lib/communication-words";
import GameOverStatsCard from "./GameOverStatsCard";
import "./GamePlay.scss";
import GamePlayHeader from "./GamePlayHeader";
import GravitySpace from "./GravitySpace";

function GamePlay() {
  const { selectedOption, randCommWordsMaxWordLength } =
    useContext(AppContext);

  const [gameState, setGameState] = useState("paused");

  const [practiceTextWords, setPracticeTextWords] = useState([]);

  const [typedChars, setTypedChars] = useState("");

  const correctCharsTypedCount = useRef(0);
  const allCharsTypedCount = useRef(0);

  const [typingSpeed, setTypingSpeed] = useState(0);

  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [correctWordIndexes, setCorrectWordIndexes] = useState([]);
  const [wrongWordIndexes, setWrongWordIndexes] = useState([]);

  const [timeElapsed, setTimeElapsed] = useState(0);

  const [countdownToStart, setCountdownToStart] = useState(3);

  const [gameOver, setGameOver] = useState(false);

  const [finalGrvForce, setFinalGrvForce] = useState(null);

  const fillBox = useCallback(() => {
    const randParagText =
      paragraphTexts[Math.trunc(Math.random() * paragraphTexts.length)].body;
    const randCommWords =
      commWords[Math.trunc(Math.random() * commWords.length)].body;
    const ptw = (selectedOption === "rand-pt" ? randParagText : randCommWords)
      .match(/[^\s]+\s?/g)
      ?.filter((word) =>
        selectedOption === "rand-cw"
          ? word.length <= randCommWordsMaxWordLength
          : true
      );

    setPracticeTextWords(ptw);
    // split a random paragraph text body
    // set it to practiceTextWords
  }, [randCommWordsMaxWordLength, selectedOption]);

  useEffect(() => {
    fillBox();
  }, [fillBox]);

  useEffect(() => {
    const intv = setInterval(() => {
      if (gameState === "paused") return;
      setTimeElapsed((prev) => {
        const timeElp = prev + 1;
        const wpm = Math.trunc(
          ((correctCharsTypedCount.current / 5) * 60) / timeElp
        );
        setTypingSpeed(wpm);

        return timeElp;
      });
    }, 1000);

    return () => {
      clearInterval(intv);
    };
  }, [gameState]);

  const handleWordInputChange = (ev) => {
    setTypedChars(ev.target.value);
  };

  const handleWordInputKeyDown = (ev) => {
    if (ev.keyCode === 37) ev.preventDefault(); // no middle edits
    if (ev.keyCode === 32) {
      // space
      ev.preventDefault();
      if (typedChars) {
        // validation
        allCharsTypedCount.current += practiceTextWords[currWordIndex].length;
        if (typedChars === practiceTextWords[currWordIndex].trim()) {
          correctCharsTypedCount.current +=
            practiceTextWords[currWordIndex].length;
          setCorrectWordIndexes((prev) => [...prev, currWordIndex]);
        } else {
          setWrongWordIndexes((prev) => [...prev, currWordIndex]);
        }

        // reset
        if (currWordIndex === practiceTextWords.length - 1) {
          // paragraph done, reset, newparagraph
          setPracticeTextWords([]);
          setCorrectWordIndexes([]);
          setWrongWordIndexes([]);
          fillBox();
          setTypedChars("");
          setCurrWordIndex(0);
        } else {
          // word done, nextword
          setTypedChars("");
          setCurrWordIndex((prev) => prev + 1);
        }
      }
    }
  };

  // countdown to start game start

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (countdownToStart < 1) return;
      setCountdownToStart((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [countdownToStart]);

  useEffect(() => {
    if (countdownToStart === 0) setGameState("playing");
  }, [countdownToStart]);

  const handleGameOver = useCallback(() => {
    setGameState("paused");
    setTimeElapsed(0);
    if (typingSpeed < 10) return;
  }, [typingSpeed]);

  useEffect(() => {
    if (gameOver) handleGameOver();
  }, [gameOver, handleGameOver]);

  return (
    <>
      <GamePlayHeader
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
        gameState={gameState}
        setGameState={setGameState}
        gameOver={gameOver}
      />
      <div className="gameplay-wrapper">
        <div className="paragraph-text_input-wrapper">
          <div className="paragraph-text-wrapper">
            <p>
              {practiceTextWords.map((word, index) =>
                currWordIndex === index ? (
                  <span key={`word-${index}`} id={`word-${index}`}>
                    {word.split("").map((char, chIndex) => {
                      if (typedChars) {
                        if (typedChars[chIndex]) {
                          if (
                            typedChars[chIndex] === char &&
                            word.slice(0, chIndex) ===
                              typedChars.slice(0, chIndex)
                          ) {
                            return (
                              <span
                                className="correct-char"
                                key={`w-${index}-c-${chIndex}`}
                                id={`w-${index}-c-${chIndex}`}
                              >
                                {char}
                              </span>
                            );
                          }
                          return (
                            <span
                              className="wrong-char"
                              key={`w-${index}-c-${chIndex}`}
                              id={`w-${index}-c-${chIndex}`}
                            >
                              {char}
                            </span>
                          );
                        }
                        if (!word.startsWith(typedChars) && char !== " ") {
                          return (
                            <span
                              className="wrong-char"
                              key={`w-${index}-c-${chIndex}`}
                              id={`w-${index}-c-${chIndex}`}
                            >
                              {char}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={`w-${index}-c-${chIndex}`}
                            id={`w-${index}-c-${chIndex}`}
                          >
                            {char}
                          </span>
                        );
                      }
                      return (
                        <span
                          key={`w-${index}-c-${chIndex}`}
                          id={`w-${index}-c-${chIndex}`}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                ) : (
                  <span
                    className={
                      correctWordIndexes.includes(index)
                        ? "correct"
                        : wrongWordIndexes.includes(index)
                        ? "wrong"
                        : ""
                    }
                    key={`word-${index}`}
                    id={`word-${index}`}
                  >
                    {word}
                  </span>
                )
              )}
              {practiceTextWords.length ? (
                <span className="press-space"> [SPACE]</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="word-input-wrapper">
            <input
              placeholder="Type here..."
              type="text"
              onChange={handleWordInputChange}
              onKeyDown={handleWordInputKeyDown}
              value={typedChars}
              disabled={gameState === "paused"}
            />
          </div>
          {countdownToStart > 0 ? (
            <div className="countdown-to-gamestart">{countdownToStart}</div>
          ) : (
            ""
          )}
        </div>
        <GravitySpace
          typingSpeed={typingSpeed}
          timeElapsed={timeElapsed}
          setGameOver={setGameOver}
          setFinalGrvForce={setFinalGrvForce}
        />
        {gameOver ? (
          <GameOverStatsCard
            typingSpeed={typingSpeed}
            finalGrvForce={finalGrvForce}
            typAccuracy={Math.trunc(
              (correctCharsTypedCount.current / allCharsTypedCount.current) *
                100
            )}
          />
        ) : null}
      </div>
    </>
  );
}

export default GamePlay;
