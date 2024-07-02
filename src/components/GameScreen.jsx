import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export const GameScreen = () => {
  const { countDown, showColors, targetcolor } = useContext(AppContext);
  console.log(showColors[0]?.hex);
  return (
    <div className="flex flex-col   gap-2 ">
      <div className=" text-right font-bold text-white px-3 sm:px-6 bg-slate-500 py-3 sm:text-xl">
        Time Remaining:{countDown}
      </div>
      <div className={` flex  flex-col justify-between h-[calc(100vh-48px)]`}>
        <div
          className={` shadow text-xl font-bold text-white text-center py-3 bg-[${showColors[1]?.hex}]`}
        >
          {showColors[0]?.name} color
        </div>
        <div className=" flex h-full ">
          <div
            className={` flex-1 flex items-center justify-center text-xl font-bold text-white shadow-sm bg-[${showColors[2]?.hex}]`}
          >
            {showColors[1]?.name} color
          </div>
          <div className=" flex-[3] flex items-center justify-center text-xl font-bold text-white text-center shadow-sm">
            <div
              draggable
              className={` p-2 sm:p-4 rounded-md border bg-[${targetcolor?.hex}]`}
            >
              {targetcolor?.name} color
            </div>
          </div>
          <div
            className={` flex-1 flex items-center justify-center text-xl font-bold text-white shadow-sm bg-[${showColors[3]?.hex}]`}
          >
            {showColors[2]?.name} color
          </div>
        </div>
        <div
          className={`shadow text-xl font-bold text-white text-center py-3 required:bg-[${showColors[0]?.hex}]`}
        >
          {showColors[3]?.name} color
        </div>
      </div>
    </div>
  );
};
