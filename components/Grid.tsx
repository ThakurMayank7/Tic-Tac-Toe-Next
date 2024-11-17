import React from 'react'
import GridBlock from './ui/GridBlock'

type GridProps = {
    darkmode: boolean;
  };

function Grid({darkmode}:GridProps) {
  return (
    <div id="Banner" className="flex justify-center items-center p-2">
            <div id="board" className="grid grid-cols-3 aspect-square h-96 gap-2">
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
                <GridBlock/>
            </div>
        </div>
  )
}

export default Grid