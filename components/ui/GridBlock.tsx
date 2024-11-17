import React from 'react'

type GridBlockProps = {
    darkM: boolean;
  };

function GridBlock({darkM}:GridBlockProps) {
  return (
    <div className="bg-teal-300 rounded aspect-square flex items-center justify-center max-h-32 hover:bg-teal-800 text-8xl" ></div>
  )
}

export default GridBlock