'use client';

import Grid from './Grid'
import React, { useState } from 'react'

type PlayGroundProps = {
    darkM: boolean;
  };

function PlayGround({darkM}:PlayGroundProps) {


    const [grid,setGrid]=useState<string[]>(["O","X","X","O","O","","","",""]);

    const [clicked,updateClicked]=useState();

    const clicking=(block:number)=>{
        console.log("once")

        console.log(block);
    }

  return (
    <Grid darkmode={darkM} grid={grid} clickBlock={clicking}/>
  )
}

export default PlayGround