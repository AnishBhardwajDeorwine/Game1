import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { GameScreen } from "./GameScreen";

export const MainScreen = () => {
  const { play, startGame } = useContext(AppContext);
  function playStart() {
    console.log("Game Started");
    startGame();
  }
  return (
    <div className=" flex items-center justify-center w-screen h-screen">
      {!play ? (
        <button
          className=" px-10 py-3 font-bold bg-slate-600 "
          onClick={() => playStart()}
        >
          Play
        </button>
      ) : (
        <GameScreen />
      )}
    </div>
  );
};
