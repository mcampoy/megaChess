const values = {
    Q: 5,
    q: 5,
    p: 10,
    P: 10,
    H: 30,
    h: 30,
    B: 40,
    b: 40,
    R: 60,
    r: 60,
    K: 100,
    k: 100
}

const parseBoard = (data) => {
    boards = {};

    board_id = data.board_id;
    board = data.board;

    white_pieces = [];
    black_pieces = [];
    empties = []

    for (let i = 0; i < 16; i++) {
        let row = 16 * i;
        for (let j = 0; j < 16; j++) {
            let col = j;
            let cel = board.substr(row + col, 1);
            if (cel != ' ') {
                piece = {
                    cel,
                    row: i,
                    col: j,
                    color: cel === cel.toUpperCase() ? 'white' : 'black',
                    capture: false,
                    value: values[cel],
                    value_capture: 0
                };
                if (cel === cel.toUpperCase()) {
                    white_pieces.push(piece);
                } else {
                    black_pieces.push(piece);
                }
            } else {
                empties.push(cel)
            }
        }
    }

    boards[board_id] = {
        white_pieces: white_pieces,
        black_pieces: black_pieces,
    };

    return boards
}

const renderBoard = (data) => {

    board = data.board;

    console.log("B 0123456789012345");
    for (let i = 0; i < 16; i++) {
        let row = 16 * i;
        console.log((i % 10) + " " + board.substr(row, 16))
    }
    console.log("W 0123456789012345")
}

module.exports = {
    parseBoard,
    renderBoard
};