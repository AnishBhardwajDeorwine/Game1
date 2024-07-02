import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { GameScreen } from "./GameScreen";

export const MainScreen = () => {
  const { play, startGame, win } = useContext(AppContext);

  return (
    <div>
      {!play ? (
        <div className=" flex items-center justify-center w-screen h-screen">
          {win === "" ? (
            <button
              className=" px-10 py-3 font-bold text-white bg-slate-600 rounded-md"
              onClick={() => startGame()}
            >
              Play
            </button>
          ) : (
            <div className=" flex gap-6 justify-center items-center flex-col">
              <button
                className=" px-10 py-3 font-bold text-white rounded-md bg-slate-600 "
                onClick={() => startGame()}
              >
                Play Again
              </button>
              <div className=" font-bold text-lg animate-bounce ">{win}</div>
            </div>
          )}
        </div>
      ) : (
        <GameScreen />
      )}
    </div>
  );
};
