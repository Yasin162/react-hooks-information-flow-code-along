import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childernColor, setChildernColor] = useState('#FFF');

  const handleChangeColor = (newChildColor) => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildernColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childernColor} onChangeColor={handleChangeColor}/>
      <Child color={childernColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
