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

Logic:
- Gravitational force(GF), is subtracted from, Speed + Accuracy or Typing force(TF), the result is converted into height(H) and then added to the current height of the ball, which either increases it of decreases it.

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
