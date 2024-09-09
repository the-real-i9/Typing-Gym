import { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Stats from "./components/Stats";
import GamePlay from "./components/GamePlay";
import Header from "./components/Header";
import Home from "./components/Home";
import AppContext from "./lib/AppContext";
import UserAuthModal from "./components/UserAuthModal";

import { getToken } from "./lib/helpers";
import {
  fetchLoggedInUser,
  fetchTodayStat,
  updateTodayStat,
  updateUserStats,
} from "./lib/CRUDs";

function App() {
  const [location, setLocation] = useState("home");
  const [selectedOption, setSelectedOption] = useState("rand-cw");
  const [randCommWordsMaxWordLength, setRandCommWordsMaxWordLength] =
    useState(5); // -1 means any
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [todayStat, setTodayStat] = useState({ ts: null, updateFlag: false });

  const token = getToken();

  useEffect(() => {
    if (token) fetchLoggedInUser(setUserData);
  }, [token]);

  useEffect(() => {
    if (userData) fetchTodayStat({ userId: userData.id, setTodayStat });
  }, [userData]);

  useEffect(() => {
    if (todayStat.ts) {
      if (todayStat.updateFlag) updateTodayStat({ todayStat: todayStat.ts });
      else updateUserStats({ userData, todayStatId: todayStat.ts.id });
    }
  }, [todayStat, userData]);

  return (
    <AppContext.Provider
      value={useMemo(
        () => ({
          location,
          setLocation,
          userData,
          setUserData,
          selectedOption,
          setSelectedOption,
          randCommWordsMaxWordLength,
          setRandCommWordsMaxWordLength,
        }),
        [location, randCommWordsMaxWordLength, selectedOption, userData]
      )}
    >
      <div className="app-wrapper">
        {location !== "gameplay" ? (
          <Header setShowAuthModal={setShowAuthModal} />
        ) : null}
        {location === "home" ? (
          <Home />
        ) : location === "gameplay" ? (
          <GamePlay todayStat={todayStat} setTodayStat={setTodayStat} />
        ) : location === "stats" ? (
          <Stats />
        ) : null}
        {showAuthModal ? (
          <UserAuthModal setShowAuthModal={setShowAuthModal} />
        ) : null}
      </div>
    </AppContext.Provider>
  );
}

export default App;
