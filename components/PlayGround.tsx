import Grid from './Grid'
import React from 'react'

type PlayGroundProps = {
    darkM: boolean;
  };

function PlayGround({darkM}:PlayGroundProps) {
  return (
    <Grid darkmode={darkM}/>
  )
}

export default PlayGround