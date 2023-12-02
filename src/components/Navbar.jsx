import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };
  return (
    <nav className='py-10 mb-10 flex justify-between'>
      <h1 className='text-xl dark:text-white'>LOGO</h1>
      <ul className='flex items-center'>
        <li className='cursor-pointer text-xl'>
          <a href="#">
            <BsFillMoonStarsFill onClick={toggleDarkMode} />
          </a>
        </li>
        <li className='bg-gradient-to-tr from-teal-600 to-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Hi</li>
      </ul>
    </nav>
  )
}

export default Navbar