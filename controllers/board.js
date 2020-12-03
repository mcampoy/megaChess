
const parseBoard = (data) => {
    boards = {};

    board_id = data.board_id;
    board = data.board;

    white_pieces = [];
    black_pieces = [];

    console.log("B 0123456789012345");

    for (let i = 0; i < 16; i++) {
        let row = 16 * i;
        console.log((i % 10) + " " + board.substr(row, 16))
        for (let j = 0; j < 16; j++) {
            let col = j;
            let cel = board.substr(row + col, 1);
            if (cel != ' ') {
                piece = {
                    cel,
                    row: i,
                    col: j,
                    color: cel === cel.toUpperCase() ? 'white' : 'black',
                    capture: false
                };
                if (cel === cel.toUpperCase()) {
                    white_pieces.push(piece);
                } else {
                    black_pieces.push(piece);
                }
            }
        }
    }
    console.log("W 0123456789012345")

   
    boards[board_id] = {
        white_pieces: white_pieces,
        black_pieces: black_pieces,
    };

    return boards
}

module.exports = parseBoard;