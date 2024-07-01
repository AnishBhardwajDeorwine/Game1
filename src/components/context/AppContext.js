import { createContext, useRef, useState } from "react";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
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
  const [play, setPlay] = useState(false);
  const [win, setWin] = useState("");
  const time = useRef(10);
  function startGame() {
    console.log("App Started ");
    setPlay(true);
    const timeoutID = setTimeout(() => {
      if (time.current === 0) {
        setPlay(false);
        setWin(false);
        clearInterval(timeoutID);
      }
      time.current = time.current - 1;
    }, 1000);
  }
  const value = {
    play,
    time,
    setPlay,
    startGame,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
