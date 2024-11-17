"use client";

import checkWin from "@/lib/checkWin";
import Grid from "./Grid";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type PlayGroundProps = {
  darkM: boolean;
};

function PlayGround({ darkM }: PlayGroundProps) {
  const [gameState, setGameState] = useState(true);

  const [status, setStatus] = useState("Begin Playing!");

  //true->X false->O
  const [turn, setTurn] = useState(true);

  const [grid, setGrid] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [clicked, updateClicked] = useState();

  const reset = () => {
    setStatus("Begin Playing!");
    setTurn(turn);
    setGrid(["", "", "", "", "", "", "", "", ""]);
    setGameState(true);
  };

  const clicking = (block: number) => {
    //  block contains the block that was clicked (block-1)

    // check if place is empty

    if (grid[block - 1] == "" && gameState) {
      //perform chance

      let a = grid;

      if (turn) {
        a[block - 1] = "X";
      } else {
        a[block - 1] = "O";
      }

      setGrid(a);

      setStatus(!turn ? "It's X's Turn" : "It's O's Turn");
      setTurn(!turn);

      //check win
      if (checkWin(grid)) {
        setGameState(false);

        setStatus(turn ? "X has Won!" : "O has Won!");
      }
    }
  };

  return (
    <>
      <Grid darkmode={darkM} grid={grid} clickBlock={clicking} />
      <div
        className={`${
          darkM ? "bg-gray-950 text-white" : ""
        } text-center pb-10 pt-2`}
      >
        <span>{status}</span>
        <br />
        <br />
        <Button variant={`${darkM ? "secondary" : "default"}`} onClick={reset}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default PlayGround;