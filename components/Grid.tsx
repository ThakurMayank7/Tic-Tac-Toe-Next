"use client";

import GridBlock from "./ui/GridBlock";

type GridProps = {
  darkmode: boolean;
  grid: string[];
  clickBlock: (block: number) => void;
};

function Grid({ darkmode, grid, clickBlock }: GridProps) {
  const clickedBlock = (gridId: number) => {
    clickBlock(gridId);
  };

  return (
    <div
      id="Banner"
      className={`flex justify-center items-center p-2 ${
        darkmode ? "bg-gray-950" : ""
      }`}
    >
      <div id="board" className="grid grid-cols-3 aspect-square h-96 gap-2">
        <GridBlock
          gridId={1}
          darkM={darkmode}
          text={grid[0]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={2}
          darkM={darkmode}
          text={grid[1]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={3}
          darkM={darkmode}
          text={grid[2]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={4}
          darkM={darkmode}
          text={grid[3]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={5}
          darkM={darkmode}
          text={grid[4]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={6}
          darkM={darkmode}
          text={grid[5]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={7}
          darkM={darkmode}
          text={grid[6]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={8}
          darkM={darkmode}
          text={grid[7]}
          click={clickedBlock}
        />
        <GridBlock
          gridId={9}
          darkM={darkmode}
          text={grid[8]}
          click={clickedBlock}
        />
      </div>
    </div>
  );
}

export default Grid;