'use client';

import React from 'react'

function Toggle({change,darkMode}:{change:()=>void;darkMode:boolean}) {
  return (
    <>
    <label
      htmlFor="check"
      className=" bg-gray-500 cursor-pointer relative w-20 h-10 rounded-full"
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        onClick={change}
      />
      <span className="w-2/5 h-4/5 bg-cyan-200 absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 transition-all duration-500"></span>
    </label>
    <div className="flex justify-center items-center ml-2">
        
    <p className={`text-center font-bold text-lg ${darkMode?"text-white":""}`}>{darkMode?"Light Mode":"Dark Mode"}</p>
    </div>
    </>
  )
}

export default Toggle