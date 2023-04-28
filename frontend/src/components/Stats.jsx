import "./Stats.scss";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import AppContext from "../lib/AppContext";
import { fetchLoggedInUser } from "../lib/CRUDs";

function Stats() {
  const { userData, setUserData } = useContext(AppContext);

  const [dates, setDates] = useState([]);
  const [ats, setAts] = useState([]);
  const [playCount, setPlayCount] = useState([]);

  ChartJS.register(
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );

  useEffect(() => {
    fetchLoggedInUser(setUserData);
  }, []);

  useEffect(() => {
    const dates = userData.stats.map(({ date }) =>
      Intl.DateTimeFormat("en-US", {
        day: "numeric",
        year: "numeric",
        month: "short",
      }).format(new Date(date))
    );
    const ats = userData.stats.map(({ avg_typing_speed }) => avg_typing_speed);
    const playCount = userData.stats.map(({ play_count }) => play_count);
    setDates(dates);
    setAts(ats);
    setPlayCount(playCount);
  }, [userData]);

  return (
    <div className="stats-wrapper">
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              label: "Avg. Speed(WPM)",
              data: ats,
            },
            {
              label: "Play Count",
              data: playCount,
            },
          ],
        }}
      />
    </div>
  );
}

export default Stats;
