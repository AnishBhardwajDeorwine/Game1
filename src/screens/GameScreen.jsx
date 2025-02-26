import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const GameScreen = () => {
  const {
    countDown,
    showColors,
    targetcolor,
    checkWin,
    totalWins,
    uniqueIndex,
    uniqueIndex2,
  } = useContext(AppContext);
  const headerSyling = "font-bold text-white  sm:text-xl";
  const verticalBoxStyling =
    "shadow text-2xl sm:text-3xl font-bold text-white text-center py-3 sm:py-6";
  const horizontalBoxStyling =
    "flex items-center justify-center text-xl sm:text-3xl font-bold text-white text-center shadow-sm";
  const handleOnDrag = (e, target) => {
    e.dataTransfer.setData("Item", JSON.stringify(target));
  };
  const handleDrop = (e, i) => {
    console.log("Handling drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    checkWin(data, showColors[uniqueIndex[i]]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const randomIndex = uniqueIndex;
  return (
    <div className="flex flex-col   gap-2 ">
      <div className=" flex justify-between px-3 sm:px-6 bg-slate-500 py-3">
        <div className={headerSyling}>
          Total Wins:&nbsp;
          {totalWins >= 2 ? <>{totalWins} Matches</> : <>{totalWins} Match</>}
        </div>
        <div className={` text-right ${headerSyling} `}>
          Time Remaining:&nbsp;{countDown}s
        </div>
      </div>
      <div className={`flex  flex-col justify-between h-[calc(100vh-64px)]`}>
        <div
          onDrop={(e) => handleDrop(e, 0)}
          onDragOver={handleDragOver}
          className={`${verticalBoxStyling} bg-${
            showColors[uniqueIndex2[0]]?.name
          }`}
        >
          {showColors[randomIndex[0]]?.name}
        </div>
        <div className=" flex h-full ">
          <div
            onDrop={(e) => handleDrop(e, 1)}
            onDragOver={handleDragOver}
            className={` flex-1 ${horizontalBoxStyling}  bg-${
              showColors[uniqueIndex2[1]]?.name
            }`}
          >
            {showColors[randomIndex[1]]?.name}
          </div>
          <div className={` flex-[3] ${horizontalBoxStyling}`}>
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
            className={` flex-1 ${horizontalBoxStyling} bg-${
              showColors[uniqueIndex2[2]]?.name
            }`}
          >
            {showColors[randomIndex[2]]?.name}
          </div>
        </div>
        <div
          onDrop={(e) => handleDrop(e, 3)}
          onDragOver={handleDragOver}
          className={`${verticalBoxStyling} bg-${
            showColors[uniqueIndex2[3]]?.name
          }`}
        >
          {showColors[randomIndex[3]]?.name}
        </div>
      </div>
    </div>
  );
};
