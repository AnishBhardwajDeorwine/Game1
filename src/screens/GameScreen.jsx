import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const GameScreen = () => {
  const { countDown, showColors, targetcolor, checkWin, totalWins } =
    useContext(AppContext);
  const handleOnDrag = (e, target) => {
    e.dataTransfer.setData("Item", JSON.stringify(target));
  };
  const handleDrop = (e, i) => {
    console.log("Handling drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    checkWin(data, showColors[i]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col   gap-2 ">
      <div className=" flex justify-between px-3 sm:px-6 bg-slate-500 py-3">
        <div className="  font-bold text-white  sm:text-xl">
          Total Wins:&nbsp;
          {totalWins >= 2 ? <>{totalWins} Matches</> : <>{totalWins} Match</>}
        </div>
        <div className=" text-right  font-bold text-white  sm:text-xl">
          Time Remaining:&nbsp;{countDown}s
        </div>
      </div>
      <div className={`flex  flex-col justify-between h-[calc(100vh-64px)]`}>
        <div
          onDrop={(e) => handleDrop(e, 0)}
          onDragOver={handleDragOver}
          className={` shadow text-2xl sm:text-3xl   font-bold text-white text-center py-3 sm:py-6  bg-${showColors[1]?.name}`}
        >
          {showColors[0]?.name}
        </div>
        <div className=" flex h-full ">
          <div
            onDrop={(e) => handleDrop(e, 1)}
            onDragOver={handleDragOver}
            className={` flex-1 flex items-center justify-center text-xl sm:text-3xl font-bold text-white shadow-sm bg-${showColors[2]?.name}`}
          >
            {showColors[1]?.name}
          </div>
          <div className=" flex-[3] flex items-center justify-center text-xl sm:text-3xl font-bold text-white text-center shadow-sm">
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, targetcolor)}
              className={` p-2 sm:p-4 rounded-md border cursor-pointer bg-${targetcolor?.name}`}
            >
              {targetcolor?.name}{" "}
            </div>
          </div>
          <div
            onDrop={(e) => handleDrop(e, 2)}
            onDragOver={handleDragOver}
            className={` flex-1 flex items-center justify-center text-xl sm:text-3xl font-bold text-white shadow-sm bg-${showColors[3]?.name}`}
          >
            {showColors[2]?.name}
          </div>
        </div>
        <div
          onDrop={(e) => handleDrop(e, 3)}
          onDragOver={handleDragOver}
          className={`shadow text-2xl sm:text-3xl  font-bold text-white text-center py-3 sm:py-6 bg-${showColors[0]?.name}`}
        >
          {showColors[3]?.name}
        </div>
      </div>
    </div>
  );
};
