import { useEffect, useState } from "react";


const ThemeToggle = () => {

const[isDarkMode, setIsDarkMode] = useState(()=>{
    const storedTheme = localStorage.getItem("theme");

    return storedTheme ==="dark";
})

useEffect(()=>{
    const html = document.documentElement;
    if(isDarkMode){
        html.classList.add("dark");
        localStorage.setItem("theme","dark");
    }else{
        html.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
},[isDarkMode]);
const handleDarkMode = ()=>setIsDarkMode(prev=>!prev);
  return (
   <>
   
   
   </>
  );
};

export default ThemeToggle;
