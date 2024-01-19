import React from 'react'


const AnotherPage = () => {
  let user = "John Doe";
  return (
  <section className='p-5'>
    <h1 className='bg-gradient-to-br from-blue-500 to-teal-600 font-bold text-5xl text-transparent bg-clip-text'>Hello World</h1>
    <h2>${user}</h2>
  </section>
  )
}

export default AnotherPage