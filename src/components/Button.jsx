import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button className='py-3 px-4 bg-blue-500 text-white text-center cursor-pointer rounded-lg mx-3' onClick={onClick}>
        {name}
    </button>
  );
}

export default Button;
