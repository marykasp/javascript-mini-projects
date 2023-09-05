// Wait for the DOM to fully load before execute code
document.addEventListener('DOMContentLoaded', () => {
  let board = null; // Initialize the chessboard
  const game = new Chess(); // create new chess game instance
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
      const move = possibleMoves[randomIdx];
      console.log(`Computer move: ${move}`);

      game.move(move); // executes the move passed in on the board
      // game.fen() returns current position as FEN string
      board.position(game.fen()); // returns the current position as a Position object

      recordMove(move, moveCount);
      moveCount++; // increment move count
    }
  };

  // Function to record and display a move in the move history
  const recordMove = (move, count) => {
    const formattedMove =
      count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} - `;

    moveHistory.textContent += formattedMove + ' ';
    moveHistory.scrollTop = moveHistory.scrollHeight; // auto scrolll to latest move
  };

  // Function to handle start of a drag position
  const onDragStart = (source, piece, position) => {
    console.log('Drag started');
    console.log(`Source: ${source}`);
    console.log(`Piece: ${piece}`);
    console.log(`Position ${Chessboard.objToFen(position)}`);

    // allow user to drag their pieces if game is not over and the piece is at the start
    return !game.game_over() && piece.search(userColor) === 0;
  };

  // Function to handle a piece drop on the board
  const onDrop = (source, target) => {
    console.log('Drop Piece');
    console.log(`Source ${source}`);
    console.log(`Target: ${target}`);

    const move = game.move({
      from: source,
      to: target,
      promotion: 'q',
    });

    //Move: {"color":"w","from":"e2","to":"e4","flags":"b","san": "e4"}
    console.log(`Move: ${JSON.stringify(move)}`);
    if (move === null) return 'snapback';

    // have computer make random move
    window.setTimeout(makeRandomMove, 250);
    // record move of user
    recordMove(move.san, moveCount);
    moveCount++;
  };

  // Function to handle the end of a piece snap animation
  const onSnapEnd = () => {
    board.position(game.fen());
  };

  // config options for the chessboard
  const boardConfig = {
    showNotation: true,
    draggable: true,
    position: 'start',
    onDragStart,
    onDrop,
    onSnapEnd,
    moveSpeed: 'slow',
    snapBackSpeed: 500,
    snapSpeed: 100,
  };

  // Initialize the chessboard
  board = Chessboard('board', boardConfig);

  // Event listeners for buttons
  document.querySelector('.play-again').addEventListener('click', () => {
    game.reset();
    board.start();

    moveHistory.textContent = '';
    moveCount = 1; // reset count and user piece color
    userColor = 'w';
  });

  document.querySelector('.set-pos').addEventListener('click', () => {
    const fen = prompt('Enter the FEN notation for the desired position');
    console.log(`FEN position: ${fen}`);
    //  rnbqkb1r/ppp1pppp/5n2/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4
    if (fen !== null) {
      if (game.load(fen)) {
        // position object initializes the board to the position specified in fen string
        board.position(fen);
        moveHistory.textContent = '';
        moveCount = 1;
        userColor = 'w';
      }
    } else {
      alert('Invalid FEN position');
    }
  });

  // flip board
  document.querySelector('.flip-board').addEventListener('click', () => {
    board.flip();
    makeRandomMove();
    // toggle user's color after flip
    userColor = userColor === 'w' ? 'b' : 'w';
  });
});
