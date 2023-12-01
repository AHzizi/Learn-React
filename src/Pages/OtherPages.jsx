import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const OtherPages = () => {
  const[darkMode, setDarkMode] =useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  return (
    <main className='w-full dark:bg-slate-600'>
       <BsFillMoonStarsFill onClick={toggleDarkMode} className='mx-4 my-5 cursor-pointer text 2xl' />
      <div className='group flex'>
       
        <div className='bg-white w-72 h-60 mx-4 my-5 text-center rounded-md group-hover:bg-blue-400'>
          <h2 className='py-4 text-3xl font-bold group-hover:text-white'><span className='bg-clip-text bg-gradient-to-tr from-teal-500 to-sky-600 text-transparent group-hover:text-white'>Hello</span><span className=' group-hover:text-white bg-gradient-to-tl from-rose-600 to-yellow-400 bg-clip-text text-transparent'> World</span></h2>
          <p className='px-3 py-9 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia laboriosam totam suscipit enim consectetur iste!</p>
        </div>
        <div>
        <div className='bg-white w-72 h-60 mx-4 my-5 text-center rounded-md group-hover:bg-blue-400'>
          <h2 className='py-4 text-3xl font-bold group-hover:text-white'><span className='bg-clip-text bg-gradient-to-tr from-teal-500 to-sky-600 text-transparent group-hover:text-white'>Hello</span><span className=' group-hover:text-white bg-gradient-to-tl from-rose-600 to-yellow-400 bg-clip-text text-transparent'> World</span></h2>
          <p className='px-3 py-9 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia laboriosam totam suscipit enim consectetur iste!</p>
        </div>
        </div>
        <section className='grid grid-cols-4'>
        <div className="bg-[url('https://source.unsplash.com/600x400')] bg-cover bg-center absolute group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
        </section>
        </div>
        <Link to="/" target="" rel="noopener noreferrer">Go to Home Pages</Link>
    </main>
  )
}

export default OtherPages