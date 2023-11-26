import './App.css'
import { BsFillMoonStarsFill  } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook
} from'react-icons/ai';


function App() {
  
  return (
    <main className='bg-white px-10'>
      <section className=' min-h-screen'>
        <nav className='py-10 mb-10 flex justify-between'>
          <h1 className='text-xl'>LOGO</h1>
          <ul className='flex items-center'>
            <li className='cursor-pointer text-xl'>
              <a href="#">
                <BsFillMoonStarsFill />
              </a>
            </li>
            <li className='bg-gradient-to-tr from-teal-600 to-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Hi</li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>AHzizi</h2>
          <h3 className='text-2xl py-2'>Exeler</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem officiis. Quia reprehenderit dicta numquam enim! Dolor officiis quas id.</p>

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
    </main>
  )
}

export default App
