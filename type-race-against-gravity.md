# Definition
- A ball begins to drop as you begin to type, once the ball touches the ground, it's game over.
- Your typing speed + accuracy is the force against gravity that pushes it upwards as it overcomes gravity, or remain on a spot if it equals gravity.
- Meanwhile, as time increases, gravity increases its force.

Features:
- You'll to choose **a text passage** or **a group of communication words** to practice with.
- Words you missed will be added to difficult words.
- Your stats are shown at the end of each game.
- You can navigate to a screen where all your stats are show, your improvements with time. If possible a graph.

Parameters:
- Accuracy
- Speed
- Time lasted
- Gravitational force reached.
- Highest Accuracy
- Highest Speed
- Highest Time lasted
- Highest gravitational force reached.


# UI CONTENT & LAYOUT
## Navigation: Tabs
### Tab-1
> Screen-1: **Home**
- Presents you with lists of text passages to pick from.
- Set Difficulty level.
- Starting the game takes you to **Screen-2**.
> Screen-2: **Gaming**
- This is the hot seat where you type like hell.
- A text passage in a box.
- On the side is a column, showing the ball-gravity animation, controlled by time and the user's typing. With a meter to show the height of the ball grading from green(up) to yellow(middle) to red(down).
- The users typing quality creates an upward force on the ball against gravity, while gravity creates a downward force.
- Game over takes you to **Screen-3**
> Screen-3: **Game stats**
- Starts are shown for the game you just finished.
- Speed, Accuracy, Difficult Keys... Parameters above are used.
- A button to navigate to the stats tab.

### Tab-2
> Screen-1: **Dashboard**
- Shows your stats since the time you've created your account.
- This helps you track your improvement overtime.
- A graph that shows this. Also, a table alternative for those who can't read graph.
- No data is shown/saved if the user isn't regiseterd/signed in.
- You can share your stats.

### Tab-3
> Screen-1: **User Profile**
- By default shows the user profile data.
- Little starts data are shown here too.
- If the user isn't signed in or registered, this presents an interface to do so.

> Aside Panel:
- This panel tells you about how to play the game and what it is about.\
*Considering the fact that existing users already knows how this game works*
- This panel can be revealed or hidden

# Logic: Calculating Parameters
- 1Word === 5keystrokes including space and punctuations. Now how?
    - When the user presses space, if the word is correct, add it to the number of characters typed correctly, else don't add it.
    - Math.trunc(Divide the no. of characters typed by 5) and check the current time elapesed.
    - This means the user has typed that many words, in that time.
    - Now use this parameters to find the many words the user would have typed, in 1munite.
    - if 2words in 10s, then in 60s, it will be 12words, hence 12wpm
    
- Accuracy: Ratio of correctly typed characters, to the total number of words.

- Assuming
    - 100% === (500)wpm
    - 1% === (5)wpm

- Typing force
    - 100% === (beatspeed + 10)wpm or greater
    - 1% === ((beatspeed + 10)/100)wpm
    - so if the user is typing at 10wpm
    - (10wpm * 1%)/((beatspeed + 10)/100)wpm = (x)%

- Grav force
    - 1% === 0.5s

- once a change occurs in grav force or typing force, the ball chages position
- `calc(100% - tf% + gf% - 50px)`


# Logic: Typing
## So how...
* select a random paragraph text
* split it into words
* set the lastWordChar
* map each word into an element of <span id='word-{index}'>
* "at game init" and "when space is clicked go to the next word", split id='word-0' and id='word-{next-index} [currentWord] into its characters respectively
* map each character of the [currentWord] in to an element of <span id='word-{currentWord}-char-{index}'
* the above procedure will recall on every "space" click, while incrementing the current word
* currentWord ref will be modified

## when space is clicked 
* validate the currentWordChara with the typedChars
* if currentWordChars === typedChars: replace the element with the splitted word, with an element with the non-splitted word, and highlight that it is correct.
* if the currentWord === lastWord: then we need to fill the box with another random paragraph
* else: increment the current word, and call the split effect again.

## when the user enters characters
* prevent the user from pressing "cursor changing keys", and watch for "space key"
* store these characters in a hidden text box
* validate it with the current word and current char
* if it matches: give the char element a "correct highlight"
* else: give the char element a "wrong highight"

## how do you validate
* compare typedChars with the currWordChars
* compare the corresponding indexes

## example word: cat
* `typedWord[indextOfLastTypedWordChar] === word[current]char[indextOfLastTypedWordChar]`
* highlight the character on this index and remove hihlights on the successive ones(this is in case of a backspace)

