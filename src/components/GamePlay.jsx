import {useEffect, useRef, useState} from "react"
import paragraphTexts from "../lib/paragraph-texts"
import GameOverStatsCard from "./GameOverStatsCard"
import "./GamePlay.scss"

function GamePlay() {
	/* const currWord = useRef(null)
	const lastWord = useRef(null) */
	const [paragTextWords, setParagTextWords] = useState([])

	const [currWordIndex, setCurrWordIndex] = useState(0)
	const [correctWordIndexes, setCorrectWordIndexes] = useState([])
	const [wrongWordIndexes, setWrongWordIndexes] = useState([])

	const correctWordsTypedCount = useRef(0)
	const totalCharsCount = useRef(0)

	const [typedChars, setTypedChars] = useState("")

	const fillBox = () => {
		const randParagText =
			paragraphTexts[Math.trunc(Math.random() * paragraphTexts.length)].body
		const ptw = randParagText.match(/[^\s]+\s?/g)
		setParagTextWords(ptw)
		totalCharsCount.current += randParagText.length
		// split a random paragraph text body
		// set it to paragTextWords
	}

	useEffect(() => {
		fillBox()
	}, [])

	const handleWordInputChange = (ev) => {
		setTypedChars(ev.target.value)
	}

	const handleWordInputKeyDown = (ev) => {
		if (ev.keyCode === 37) ev.preventDefault()
		if (ev.keyCode === 32) {
			ev.preventDefault()
			if (typedChars) {
				// validation
				if (typedChars === paragTextWords[currWordIndex].trim()) {
					correctWordsTypedCount.current += paragTextWords[currWordIndex].length
					setCorrectWordIndexes((prev) => [...prev, currWordIndex])
				} else {
					setWrongWordIndexes((prev) => [...prev, currWordIndex])
				}

				// reset
				if (currWordIndex === paragTextWords.length - 1) {
					// paragraph done
					fillBox()
					setTypedChars("")
					setCurrWordIndex(0)
				} else {
					// word done
					setTypedChars("")
					setCurrWordIndex((prev) => prev + 1)
				}
			}
		}
	}

	return (
		<div className="gameplay-wrapper">
			<div className="paragraph-text_input-wrapper">
				<div className="paragraph-text-wrapper">
					<p>
						{paragTextWords.map((word, index) =>
							currWordIndex === index ? (
								<span key={`word-${index}`} id={`word-${index}`}>
									{word.split("").map((char, chIndex) =>
										typedChars && typedChars[chIndex] === char && word.startsWith(typedChars) ? (
											<span
												className="correct-char"
												key={`w-${index}-c-${chIndex}`}
												id={`w-${index}-c-${chIndex}`}
											>
												{char}
											</span>
										) : typedChars &&
										  typedChars.length === chIndex + 1 &&
										  typedChars[chIndex] !== char ? (
											<span
												className="wrong-char"
												key={`w-${index}-c-${chIndex}`}
												id={`w-${index}-c-${chIndex}`}
											>
												{char}
											</span>
										) : (
											<span
												className={
													typedChars && !word.startsWith(typedChars)
														? "wrong-prev-chars"
														: ""
												}
												key={`w-${index}-c-${chIndex}`}
												id={`w-${index}-c-${chIndex}`}
											>
												{char}
											</span>
										)
									)}
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
						<span className="press-space"> [SPACE]</span>
					</p>
				</div>
				<div className="word-input-wrapper">
					<input
						placeholder="Type here..."
						type="text"
						onChange={handleWordInputChange}
						onKeyDown={handleWordInputKeyDown}
						value={typedChars}
						autoComplete="off"
					/>
				</div>
			</div>
			<div className="gravity-ball-wrapper">
				<div className="tff-value">25N</div>
				<div className="space">
					<div className="ball">
						<span className="middle">
							<span className="inner"></span>
						</span>
					</div>
				</div>
				<div className="egp-value">50N</div>
			</div>
			{/* <GameOverStatsCard /> */}
		</div>
	)
}

export default GamePlay
