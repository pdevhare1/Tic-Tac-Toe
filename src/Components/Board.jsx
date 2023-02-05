import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const calculateWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    if (!grid.includes(null)) {
      return "Draw";
    }
    return null;
  };

  const winner = calculateWinner();

  const handleClick = (index) => {
    if (grid[index] || winner) {
      return;
    }
    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setGrid(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  return (
    <div className="board-container">
      {winner ? (
        <>
          {winner} Won the Game <button onClick={resetGame}>Play Again</button>
        </>
      ) : (
        <>
          <h1 className="player-Name">Player: {currentPlayer} Please Move</h1>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={grid[0]} />
            <Square onClick={() => handleClick(1)} value={grid[1]} />
            <Square onClick={() => handleClick(2)} value={grid[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={grid[3]} />
            <Square onClick={() => handleClick(4)} value={grid[4]} />
            <Square onClick={() => handleClick(5)} value={grid[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={grid[6]} />
            <Square onClick={() => handleClick(7)} value={grid[7]} />
            <Square onClick={() => handleClick(8)} value={grid[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
