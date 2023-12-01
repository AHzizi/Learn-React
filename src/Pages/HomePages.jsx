import { BsFillMoonStarsFill  } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook
} from'react-icons/ai';
import { useState } from "react";
import { Link } from "react-router-dom";


const HomePages = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };
  return (
    <div className=''>
    <main className='bg-white px-10 dark:bg-gray-900'>
      <section className=' min-h-screen'>
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
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>AHzizi</h2>
          <h3 className='text-2xl py-2 dark:text-white'>Exeler</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem officiis. Quia reprehenderit dicta numquam enim! Dolor officiis quas id.</p>

        </div>
        <div className='text-5xl flex justify-center gap-16 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
        <div className='relative bg-gradient-to-br from-teal-500 to-cyan-200 rounded-full w-80 h-80 mt-20 mx-auto'>
          <img src="#" alt="profile" />
        </div>
      </section>
      <section>
        <div className=''>
          <h3 className='text-3xl py-1'>Services</h3>
          <p className='text-md py-2 leading-8 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum ea quod at sunt unde ratione velit provident eligendi perferendis!</p>
          <p className='text-md py-2 leading-8 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione labore blanditiis voluptate exercitationem enim non mollitia animi reiciendis! Fugit veritatis rerum qui libero assumenda itaque, necessitatibus fugiat? Accusamus, vel temporibus?</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img className='justify-center mx-auto' src="https://source.unsplash.com/random/100x100/?computer" alt="" />
          <h3 className='text-lg font-medium text-gray-600 pt-8 pb-2'>Beautiful Design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores necessitatibus praesentium sit excepturi error provident aspernatur quos itaque minus.</p>
          <h4 className='py-4 text-teal-600'>Design Tools</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Figma</p>
          <p className='text-gray-800 py-1'>Corel Draw</p>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img className='justify-center mx-auto' src="https://source.unsplash.com/random/100x100/?nature" alt="" />
          <h3 className='text-lg font-medium text-gray-600 pt-8 pb-2'>Beautiful Design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores necessitatibus praesentium sit excepturi error provident aspernatur quos itaque minus.</p>
          <h4 className='py-4 text-teal-600'>Design Tools</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Figma</p>
          <p className='text-gray-800 py-1'>Corel Draw</p>
        </div>

        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img className='justify-center mx-auto' src="https://source.unsplash.com/random/100x100/?computer" alt="" />
          <h3 className='text-lg font-medium text-gray-600 pt-8 pb-2'>Beautiful Design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores necessitatibus praesentium sit excepturi error provident aspernatur quos itaque minus.</p>
          <h4 className='py-4 text-teal-600'>Design Tools</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Figma</p>
          <p className='text-gray-800 py-1'>Corel Draw</p>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia provident sunt omnis, magni veritatis inventore beatae delectus placeat tempore.</p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div class="bg-[url('https://source.unsplash.com/random/100x100/?computer')]"></div>
          <div class="bg-[url('https://source.unsplash.com/random/1000x800/?computer')]"></div>
          <div class="bg-[url('https://source.unsplash.com/random/1000x800/?computer')]"></div>
          <div class="bg-[url('https://source.unsplash.com/random/1000x800/?computer')]"></div>
          <div class="bg-[url('https://source.unsplash.com/random/1000x800/?computer')]"></div>
        </div>
      </section>
    </main>
    <Link to="/other-pages" target="_blank" rel="noopener noreferrer">Go to Other Pages</Link>
  </div>
  )
}

export default HomePages