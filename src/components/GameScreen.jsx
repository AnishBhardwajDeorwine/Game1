import React, { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";

export const GameScreen = () => {
  const { countDown, showColors, targetcolor, checkWin } =
    useContext(AppContext);
  const [top, setTop] = useState([]);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [bottom, setBottom] = useState([]);
  function handleOnDrag(e, target) {
    e.dataTransfer.setData("Item", JSON.stringify(target));
  }
  function handleTopDrop(e) {
    console.log("Handling top drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    setTop(data);
    checkWin(data, showColors[0]);
  }
  function handleTopDragOver(e) {
    e.preventDefault();
  }
  function handleLeftDrop(e) {
    console.log("Handling Left drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    setLeft(data);
    checkWin(data, showColors[1]);
  }
  function handleLeftDragOver(e) {
    e.preventDefault();
  }
  function handleRightDrop(e) {
    console.log("Handling Right drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    setRight(data);
    checkWin(data, showColors[2]);
  }
  function handleRightDragOver(e) {
    e.preventDefault();
  }
  function handleBottomDrop(e) {
    console.log("Handling Bottom drop");
    const item = e.dataTransfer.getData("Item");
    const data = JSON.parse(item);
    setBottom(data);
    checkWin(data, showColors[3]);
  }
  function handleBottomDragOver(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col   gap-2 ">
      <div className=" text-right font-bold text-white px-3 sm:px-6 bg-slate-500 py-3 sm:text-xl">
        Time Remaining:{countDown}
      </div>
      <div className={` flex  flex-col justify-between h-[calc(100vh-48px)]`}>
        <div
          onDrop={handleTopDrop}
          onDragOver={handleTopDragOver}
          className={` shadow text-xl font-bold text-white text-center py-3  bg-[${showColors[1]?.hex}]`}
        >
          {showColors[0]?.name} color
        </div>
        <div className=" flex h-full ">
          <div
            onDrop={handleLeftDrop}
            onDragOver={handleLeftDragOver}
            className={` flex-1 flex items-center justify-center text-xl font-bold text-white shadow-sm bg-[${showColors[2]?.hex}]`}
          >
            {showColors[1]?.name} color
          </div>
          <div className=" flex-[3] flex items-center justify-center text-xl font-bold text-white text-center shadow-sm">
            <div
              draggable
              onDragStart={(e) => handleOnDrag(e, targetcolor)}
              className={` p-2 sm:p-4 rounded-md border bg-[${targetcolor?.hex}]`}
            >
              {targetcolor?.name} color
            </div>
          </div>
          <div
            onDrop={handleRightDrop}
            onDragOver={handleRightDragOver}
            className={` flex-1 flex items-center justify-center text-xl font-bold text-white shadow-sm bg-[${showColors[3]?.hex}]`}
          >
            {showColors[2]?.name} color
          </div>
        </div>
        <div
          onDrop={handleBottomDrop}
          onDragOver={handleBottomDragOver}
          className={`shadow text-xl font-bold text-white text-center py-3 required:bg-[${showColors[0]?.hex}]`}
        >
          {showColors[3]?.name} color
        </div>
      </div>
    </div>
  );
};
