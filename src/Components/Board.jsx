// import React from "react";
import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = () => {
    const winningLogic = [
      [0, 1, 2], // this for row
      [3, 4, 5], // this for row
      [6, 7, 8], // this for row
      [0, 3, 6], // this for column
      [1, 4, 7], // this for column
      [2, 5, 8], // this for column
      [0, 4, 8], // this for diagonal
      [2, 4, 6], // this for diagonal
    ];
    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleclick = (index) => {
    const copyState = [...state];
    copyState[index] = isXNext ? "X" : "O";
    setState(copyState);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} Won the Game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h1 classname="player-Name">
            Player: {isXNext ? "X" : "O"} Please Move
          </h1>
          <div className="board-row">
            <Square onClick={() => handleclick(0)} value={state[0]} />
            <Square onClick={() => handleclick(1)} value={state[1]} />
            <Square onClick={() => handleclick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleclick(3)} value={state[3]} />
            <Square onClick={() => handleclick(4)} value={state[4]} />
            <Square onClick={() => handleclick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleclick(6)} value={state[6]} />
            <Square onClick={() => handleclick(7)} value={state[7]} />
            <Square onClick={() => handleclick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
