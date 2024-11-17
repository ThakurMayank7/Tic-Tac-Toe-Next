'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayGround from "@/components/PlayGround";
import { useState } from "react";


export default function Home() {

  const [darkMode,changeDarkMode]=useState(false);

  const handleChange=()=>{
    changeDarkMode(!darkMode);
  }

  return (
    <>
      <Header darkMode={darkMode} changeDark={handleChange}/>
    
    
        <PlayGround darkM={darkMode}/>
        <br />
        <Footer/>
    </>
  );
}
