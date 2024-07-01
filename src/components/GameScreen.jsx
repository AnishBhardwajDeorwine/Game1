import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

export const GameScreen = () => {
  const { time } = useContext(AppContext);
  return (
    <div className="flex flex-col ">
      <div>Time Remaining{time?.current}</div>
      <div>Top Div</div>
      <div className=" flex">
        <div>Left Div</div>
        <div>Center Div</div>
        <div>Right Div</div>
      </div>
      <div>Bottom Div</div>
    </div>
  );
};
