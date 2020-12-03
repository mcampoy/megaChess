const {
    move,
    moveQueen,
    movePawn,
    moveKing,
    capturePawn
} = require('./moves');

// const verifyBoard = require('./verifyBoard');

const strategy = (piece, data) => {

    if (piece.cel === 'P') {

        if (board.substr((piece.row - 1) * 16 + piece.col - 1, 1) === 'q' ||  board.substr((piece.row - 1) * 16 + piece.col - 1, 1) === 'k') {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row - 1) * 16 + piece.col + 1, 1) === 'q') {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

    }

    if (piece.cel === 'p') {

        if (board.substr((piece.row + 1) * 16 + piece.col + 1, 1) === 'Q') {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row + 1) * 16 + piece.col - 1, 1) === 'Q') {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'q' || piece.cel === 'Q') {
        const possible_move = moveQueen(piece.row, piece.col, data.actual_turn);
        return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
    }

    if (piece.cel === 'K') {
        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'k') {
        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }
}

module.exports = strategy