import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const colors = [
  {
    name: "Gray",
    hex: "#111827",
  },
  {
    name: "Red",
    hex: "#7f1d1d",
  },
  {
    name: "Yellow",
    hex: "#facc15",
  },
  {
    name: "Cyan",
    hex: "#0891b2",
  },
  {
    name: "Violet",
    hex: "#2e1065",
  },
  {
    name: "Purple",
    hex: "#6b21a8",
  },
  {
    name: "Pink",
    hex: "#db2777",
  },
  {
    name: "Olive",
    hex: "#808000",
  },
  {
    name: "Teal",
    hex: "#008080",
  },
  {
    name: "Navy",
    hex: "#000080",
  },
];
const showColors = [];
const startIndex = Math.floor(Math.random() * 6);
// console.log(startIndex);
showColors.push(...colors.slice(startIndex, startIndex + 4));
const randIdx = Math.floor(Math.random() * 4);
let targetcolor = showColors[randIdx];
export default function AppContextProvider({ children }) {
  const [play, setPlay] = useState(false);
  const [win, setWin] = useState("");
  const [countDown, setCountdown] = useState(10);
  useEffect(() => {
    if (play) {
      setCountdown(10);
      setWin("");

      // Pick four random colors

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            setWin("Time's up! You lose.");
            //setPlay(false);
            const startIndex = Math.floor(Math.random() * 6);

            showColors.length = 0;
            showColors.push(...colors.slice(startIndex, startIndex + 4));
            const randIdx = Math.floor(Math.random() * 4);
            targetcolor = showColors[randIdx];
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [play]);
  function startGame() {
    console.log("Game Started ");
    setPlay(true);
  }
  function checkWin(current, dragged) {
    console.log("Checking win");
    console.log("Current", current);
    console.log("target", dragged);
    if (current.name === dragged.name) {
      setWin("You have won!");
      setPlay(false);
      const startIndex = Math.floor(Math.random() * 6);

      showColors.length = 0;
      showColors.push(...colors.slice(startIndex, startIndex + 4));
      const randIdx = Math.floor(Math.random() * 4);
      targetcolor = showColors[randIdx];
    } else {
      console.log("Wrong selection");
    }
  }
  const value = {
    play,
    countDown,
    setPlay,
    startGame,
    win,
    showColors,
    targetcolor,
    checkWin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
