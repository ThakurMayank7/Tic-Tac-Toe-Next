'use client';

import Grid from './Grid'
import React, { useState } from 'react'

type PlayGroundProps = {
    darkM: boolean;
  };

function PlayGround({darkM}:PlayGroundProps) {

    const [status,setStatus] =useState("Begin Playing!");


    const [grid,setGrid]=useState<string[]>(["O","X","X","O","O","","","",""]);

    const [clicked,updateClicked]=useState();

    const clicking=(block:number)=>{

        //  block contains the block that was clicked (block-1)

        // check if place is empty
        if(grid[block-1]=="")
        {
            console.log("empty");
            //check if chance is valid



        }


        //perform chance

        //check win


    }

  return (
    <>
    <Grid darkmode={darkM} grid={grid} clickBlock={clicking}/>
    <div className={`${darkM?"bg-gray-950 text-white":""} text-center pb-10 pt-2`}>

    <span>{status}</span>
    </div>
    </>
  )
}

export default PlayGround