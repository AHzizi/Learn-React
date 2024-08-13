import React from 'react'
import Card from '../components/Card'
Card

const GamePages = () => {
  return (
    <div className='w-screen h-screen bg-slate-800'>
      <section className='text-center pt-8 text-3xl font-bold font-sans text-white'>CHOOSE THE GAME</section>
      <div className='container place-content-center'>
       <Card />
      </div>
    </div>
  )
}

export default GamePages
