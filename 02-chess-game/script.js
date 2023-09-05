// Wait for the DOM to fully load before execute code
document.addEventListener('DOMContentLoaded', () => {
  let board = null; // Initialize the chessboard
  const game = new Chess(); // Create new Chess game
  const moveHistory = document.getElementById('move-history'); // Get move history container

  let moveCount = 1; // Inialize the move count
  let userColor = 'w'; // Inialize the user's colors as white

  // Function to make a random move for the computer
  const makeRandomMove = () => {
    const possibleMoves = game.moves();

    // check if game is over, if not then pick a random move from the possible moves
    if (game.game_over()) {
      alert('Checkmate!');
    } else {
      const randomIdx = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves(randomIdx);

      game.move(move); // executes the move passed in on the board
      // game.fen() returns current position as FEN string
      board.position(game.fen()); // returns the current position as a Position object

      recordMove(move, moveCount); // record and display the move with move count
      moveCount++; // increment move count
    }

    // Function to record and display a move in the move history
    const recordMove = (move, count) => {
      const formattedMove =
        count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} - `;

      moveHistory.textContent += formattedMove + ' ';
      moveHistory.scrollTop = moveHistory.scrollHeight; // auto scrolll to latest move
    };
  };
});
