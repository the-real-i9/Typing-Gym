import { useMemo, useState } from "react"
import "./App.scss"
import GamePlay from "./components/GamePlay"
import Header from "./components/Header"
import Home from "./components/Home"
import AppContext from "./lib/AppContext"

function App() {
  const [location, setLocation] = useState("home")
  const [selectedOption, setSelectedOption] = useState("rand-cw")
  const [randCommWordsMaxWordLength, setRandCommWordsMaxWordLength] =
    useState(5) // -1 means any

  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          location,
          setLocation,
          selectedOption,
          setSelectedOption,
          randCommWordsMaxWordLength,
          setRandCommWordsMaxWordLength,
        }),
        [location, randCommWordsMaxWordLength, selectedOption]
      )}
    >
      <div className="app-wrapper">
        {location !== "gameplay" ? <Header /> : null}
        {location === "home" ? (
          <Home />
        ) : location === "gameplay" ? (
          <GamePlay />
        ) : null}
      </div>
    </AppContext.Provider>
  )
}

export default App
