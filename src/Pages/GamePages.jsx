// import React from 'react';

// const Square = () => {
//   return (
//     <button className='w-9 h-9 border-4 border-gray-700'>
//       X
//     </button>
//   );
// };

// const GamePages = () => {
//   return (
//     <div>
//       <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-sky-500 font-bold mb-9'>
//         Game Tic-Tac-Toe
//       </h1>
//       <div className='board grid grid-cols-3 gap-2 w-48 mx-auto'>
//         <div className='board-row flex justify-center items-center'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//         <div className='board-row flex justify-center items-center'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//         <div className='board-row flex justify-center items-center'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GamePages;


// src/TicTacToe.js
import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squares = [...board];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

// Calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
