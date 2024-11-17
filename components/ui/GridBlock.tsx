"use client";

import React from "react";

type GridBlockProps = {
  darkM: boolean;
  gridId: number;
  click: (id: number) => void;
  text: string;
};

function GridBlock({ darkM, gridId, click, text }: GridBlockProps) {
  const func = () => {
    click(gridId);
  };
  return (
    <div
      className={`${
        darkM ? "bg-gray-600" : "bg-teal-300"
      } rounded aspect-square flex items-center justify-center max-h-32 
        hover:${darkM ? "bg-black" : "bg-teal-700"} text-8xl cursor-pointer`}
      onClick={func}
    >
      {text}
    </div>
  );
}

export default GridBlock;