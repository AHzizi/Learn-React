import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import '../App.css'
import Button from './Button'

const data = [{
  'no' : 1,
  'name' : 'John Doe',
  'questions' : 'Kocak Gemink'
  },

  {
  'no' : 2,
  'name' : 'Jane Doe',
  'questions' : 'Kocak gem'
  },
  {
    'no' : 3,
    'name' : 'Lord',
    'questions' : 'Njirr Lah'
  }

]

const Hero = () => {
  return (
   <>
    <section className='bg-nightCity bg-center md:bg-center lg:bg-cover bg-cover w-full min-h-screen h-auto sm:h-screen overflow-hidden'>
      <div className='container px-7 py-5 text-white'>
        <h2 className='text-4xl font-semibold sm:text-2xl'>Halo, Nama Saya</h2>
        <h1 className='mb-3 text-5xl mt-4 font-bold bg-gradient-to-br text-transparent from-teal-300 to-sky-500 bg-clip-text hover:bg-gradient-to-bl hover:from-yellow-400 hover:to-green-400 hover:text-transparents hover:bg-clip-text sm:text-3xl'>`REN`</h1>
        <TypeAnimation
        className='text-xl font-semibold mb-2'
        sequence={[
          'Pemalas',
          1000,
          'Player Kikir Impek',
          1000,
          'Mending Turu',
          1000,
          'Ingin Menjadi Anime',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
    />
      <hr className='mb-1 text-sm' />
      <hr />
      <p className='mt-5 text-xl font-semibold sm:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id hic non error facilis, aperiam quos quia illum temporibus ab laudantium, enim unde et optio est deleniti repellat dolor necessitatibus.</p>
      <p className='mt-7 text-7xl font-extrabold sm:text-4xl'>WEB INI HANYA UNTUK <span className='bg-gradient-to-bl text-transparent from-teal-400 to-sky-400 bg-clip-text sm:text-3xl'>LATIHAN!!</span> </p>
      </div>
      <div className='px-7 mt-10 text-slate-700 absolute flex gap-4'>
      <Button 
        text='Next Page'
        to={'/home-pages'}
      />
      <Button 
        text='Prev Page'
        to={'/'}
      />
      <Button 
        text='Clock Page'
        to={'/clock-page'}
      />
      <Button 
        text='Game Page'
        to={'/game-page'}
      />
      <Button 
        text='Grid'
        to={'/learn-grid'}
      />
      <Button
        text='Fetch'
        to={'/services'}
      />
      </div>
      
    </section>
   </>
  )
}

export default Hero
