'use client';

import React from 'react'
import Toggle from './ui/Toggle';

type HeaderProps = {
    darkMode: boolean;
    changeDark: () => void; // Define the prop type as a function
  };


function Header({darkMode,changeDark}:HeaderProps) {

  return (
    <header className="flex flex-row items-center justify-center mb-4 bg-gray-100 p-4">
        <h1 className="text-6xl font-bold">Tic Tac Toe</h1>
        <div className="flex ml-10">

        <Toggle darkMode={darkMode} change={changeDark}/>   
        </div>


            
        

    </header>
  );
}

export default Header