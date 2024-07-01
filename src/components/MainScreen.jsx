import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { GameScreen } from "./GameScreen";

export const MainScreen = () => {
  const { play, startGame } = useContext(AppContext);

  return (
    <div>
      {!play ? (
        <div className=" flex items-center justify-center w-screen h-screen">
          <button
            className=" px-10 py-3 font-bold bg-slate-600 "
            onClick={() => startGame()}
          >
            Play
          </button>
        </div>
      ) : (
        <GameScreen />
      )}
    </div>
  );
};
