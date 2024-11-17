'use client';

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import { useState } from "react";


export default function Home() {

  const [darkMode,changeDarkMode]=useState(false);

  const handleChange=()=>{
    changeDarkMode(!darkMode);
  }

  return (
    <>
      <Header darkMode={darkMode} changeDark={handleChange}/>
    
    
        <Grid/>
        <br />
        <Footer/>
    </>
  );
}
