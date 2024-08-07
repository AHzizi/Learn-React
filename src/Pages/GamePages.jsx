import React, { useState, useEffect } from "react";
import '../App.css';
const GRID_SIZE = 20;

function getRandomCoordinates() {
  const min = 1;
  const max = GRID_SIZE - 1;
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  const y = Math.floor(Math.random() * (max - min + 1) + min);
  return [x, y];
}

const GamePages = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [direction, setDirection] = useState([0, -1]);
  const [gameOver, setGameOver] = useState(false);

  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      default:
        break;
    }
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];
    
    if (
      newHead[0] < 0 || newHead[1] < 0 || 
      newHead[0] >= GRID_SIZE || newHead[1] >= GRID_SIZE ||
      newSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(newHead);

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getRandomCoordinates());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 200);
      document.addEventListener("keydown", changeDirection);
      return () => {
        clearInterval(interval);
        document.removeEventListener("keydown", changeDirection);
      };
    }
  }, [snake, direction, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Snake Xenzia</h1>
      {gameOver ? (
        <div className="text-red-500 text-2xl">Game Over</div>
      ) : (
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 20px)`,
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnake = snake.some(segment => segment[0] === x && segment[1] === y);
            const isFood = food[0] === x && food[1] === y;
            return (
              <div
                key={i}
                className={`w-5 h-5 ${isSnake ? "bg-green-500" : ""} ${isFood ? "bg-red-500" : "bg-gray-800"}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GamePages;
