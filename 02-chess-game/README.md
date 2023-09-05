## FEN String

**FEN** [FEN]('https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation') is standard notation used to represent a particular chessboard position. It provides a concise and human-readable way to describe the placement of chess pieces on the board, as well as other important information about the position.

A FEN string consists of _6 fields_ separated by spaces:

1. **Piece Placement** - 8 ranks: This field represents the positions of the peices on the board.
   Each rank is represented by a series of characters:

- 'K' represents a white king
- 'Q' represents a white queen
- 'R' represents a white rook
- 'B' represents a white bishop
- 'N' represents a white knight
- 'P' represents a white pawn

- 'k' represents a black king
- 'q' represents a black queen
- 'r' represents a black rook
- 'b' represents a black bishop
- 'n' represents a black knight
- 'p' represents a black pawn

Digits represent empty squares (1-8), with the number indicating the count of consecutive empty squares.

FEN example: `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR` represents the starting position of a chess game.

2. **Active Color**: This field indicates which player's turn it is to move

- `w`: white pieces
- `b`: black pieces

3. **Castling Availability**:

- This next field tells if the players can castle and to what side. Uppercase letters come first to indicate White's castling availability, followed by lowercase letters for Black's.

- The letter "k" indicates that kingside castling is available, while "q" means that a player may castle queenside. The symbol "-" designates that neither side may castle.

4. **Possible En Passant Target** (1-2 characters):
   If a pawn has moved two squares immediately before a position is reached and is thus a possible target for an en passant capture, the FEN string adds the square behind the pawn in algebraic notation in its fourth field. If no en passant targets are available, the "-" symbol is used.

5. **Halfmove Clock**
   The next field of the FEN code informs how many moves both players have made since the last pawn advance or piece capture—known by chess programmers as the number of halfmoves. This field is useful to enforce the 50-move draw rule. When this counter reaches 100 (allowing each player to make 50 moves), the game ends in a draw.

6. **Fullmove Number**
   The sixth and last field of the FEN code shows the number of completed turns in the game. This number is incremented by one every time Black moves. Chess programmers call this a fullmove.
