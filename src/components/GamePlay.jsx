import {useEffect, useRef, useState} from "react"
import GameOverStatsCard from "./GameOverStatsCard"
import "./GamePlay.scss"

function GamePlay() {
	/* currWord: current word */
	/* currChar: current character of the current word */
	/* lastWordChar: lastWord and last character of the last word */
	const currWord = useRef(null)
	const lastWord = useRef(null)

	const [typedChars, setTypedChars] = useState("")

	const fillBox = () => {
		/* So how... */
		// select a random paragraph text
		// split it into words
		// set the lastWordChar
		// map each word into an element of <span id='word-{index}'>
		// "at game init" and "when space is clicked go to the next word", split id='word-0' and id='word-{next-index} [currentWord] into its characters respectively
		// map each character of the [currentWord] in to an element of <span id='word-{currentWord}-char-{index}'
		// the above procedure will recall on every "space" click, while incrementing the current word
		// currentWord ref will be modified
		/* when space is clicked */
		// validate the currentWordChara with the typedChars
		// if currentWordChars === typedChars: replace the element with the splitted word, with an element with the non-splitted word, and highlight that it is correct.
		// if the currentWord === lastWord: then we need to fill the box with another random paragraph
		// else: increment the current word, and call the split effect again.
		/* when the user enters characters */
		// prevent the user from pressing "cursor changing keys", and watch for "space key"
		// store these characters in a hidden text box
		// validate it with the current word and current char
		// if it matches: give the char element a "correct highlight"
		// else: give the char element a "wrong highight"
		/* how do you validate */
		// compare typedChars with the currWordChars
		// compare the corresponding indexes
		/* example word: cat */
		// typedWord[indextOfLastTypedWordChar] === word[current]char[indextOfLastTypedWordChar]
	}

	useEffect(() => {
		fillBox()
	}, [])

	return (
		<div className="gameplay-wrapper">
			<div className="paragraph-text-wrapper">
				<p>Passage will display here...</p>
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
			<GameOverStatsCard />
		</div>
	)
}

export default GamePlay
