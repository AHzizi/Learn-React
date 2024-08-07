import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, to, onClick }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {text}
    </button>
  );

  if (to) {
    return (
      <Link to={to} className="text-decoration-none">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
