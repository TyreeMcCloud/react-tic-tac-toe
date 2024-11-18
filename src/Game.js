import React, { useState } from "react"; // TODO: Import useState() hook
import GameGrid from "./GameGrid.js";

function Game() {
   // TODO: Replace variables with state variables
   const [moves, setMoves] = useState(new Array(9).fill("")); // Initialize state for moves
   const [turn, setTurn] = useState("X"); // Initialize state for the current turn

   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy);
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // TODO: Add newGame() function here
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset moves to an empty array
      setTurn("X"); // Reset turn to X
   }

   // TODO: Make New Game button call newGame() when clicked
   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button> {/* Button calls newGame */}
         </p>
      </>
   );
}

export default Game;
