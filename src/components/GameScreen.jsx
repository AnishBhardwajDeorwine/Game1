import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export const GameScreen = () => {
  const { countDown } = useContext(AppContext);
  return (
    <div className="flex flex-col   gap-2 ">
      <div className=" text-right font-bold text-white px-3 sm:px-6 bg-slate-500 py-3 sm:text-xl">
        Time Remaining:{countDown}
      </div>
      <div className=" flex  flex-col justify-between h-[calc(100vh-48px)]">
        <div className=" shadow text-xl font-bold text-white text-center py-3">
          Top Div
        </div>
        <div className=" flex h-full ">
          <div className=" flex-1 flex items-center justify-center shadow-sm">
            Left Div
          </div>
          <div className=" flex-[3] flex items-center justify-center text-center shadow-sm">
            Center Div
          </div>
          <div className=" flex-1 shadow-sm text-center flex items-center justify-center">
            Right Div
          </div>
        </div>
        <div className="shadow text-xl font-bold text-white text-center py-3">
          Bottom Div
        </div>
      </div>
    </div>
  );
};
