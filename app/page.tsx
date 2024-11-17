'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayGround from "@/components/PlayGround";
import { useState } from "react";


export default function Home() {

  const [darkMode,changeDarkMode]=useState(true);

  const handleChange=()=>{
    changeDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode?"bg-gray-950":""} h-screen`}>
      <Header darkMode={darkMode} changeDark={handleChange}/>
    
        <div className={`${darkMode?"bg-gray-950":""}`}>
    <br />
        </div>
    
        <PlayGround darkM={darkMode}/>
        <Footer darkmode={darkMode}/>
    </div>
  );
}
