import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
const getUniqueindex = (size) => {
  const value = new Set();
  while (value.size < size) {
    const randomIndex = Math.floor(Math.random() * 4);
    value.add(randomIndex);
  }
  return Array.from(value);
};

let uniqueIndex = getUniqueindex(4);
let uniqueIndex2 = getUniqueindex(4);
const checkSame = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      let temp = arr2[i];
      arr2[i] = arr2[(i + 1) % arr2.length];
      arr2[(i + 1) % arr2.length] = temp;
    }
  }
};
checkSame(uniqueIndex, uniqueIndex2);
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
  const [totalWins, setTotalWins] = useState(0);
  useEffect(() => {
    if (play) {
      setCountdown(10);
      setWin("");
      setTotalWins(0);

      // Pick four random colors

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            setWin("Time's up! You lose.");
            setPlay(false);
            const startIndex = Math.floor(Math.random() * 6);

            showColors.length = 0;
            showColors.push(...colors.slice(startIndex, startIndex + 4));
            const randIdx = Math.floor(Math.random() * 4);
            targetcolor = showColors[randIdx];
            uniqueIndex = getUniqueindex(4);
            uniqueIndex2 = getUniqueindex(4);
            checkSame(uniqueIndex, uniqueIndex2);
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
      toast.success("You have won!");
      setCountdown(10);
      setTotalWins((prev) => prev + 1);
    } else {
      setWin("You have loss the game!");
      setPlay(false);
    }
    const startIndex = Math.floor(Math.random() * 6);
    showColors.length = 0;
    showColors.push(...colors.slice(startIndex, startIndex + 4));
    const randIdx = Math.floor(Math.random() * 4);
    targetcolor = showColors[randIdx];
    uniqueIndex = getUniqueindex(4);
    uniqueIndex2 = getUniqueindex(4);
    checkSame(uniqueIndex, uniqueIndex2);
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
    totalWins,
    uniqueIndex,
    uniqueIndex2,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
