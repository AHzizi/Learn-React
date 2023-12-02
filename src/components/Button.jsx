import React from 'react'

const Button = (props) => {
  return (
    <button className='py-4 px-5 bg-blue-500 text-white text-center cursor-pointer rounded-lg mx-3'>
        {props.name}
    </button>
  )
}

export default Button