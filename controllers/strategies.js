const parseBoard = require('./board');
const {
    move,
    moveQueen,
    movePawn,
    moveKing,
    capturePawn
} = require('./moves');

const strategy = (piece, data) => {

    parseBoard(data);
    const white_pieces = boards[board_id].white_pieces;
    const black_pieces = boards[board_id].black_pieces;

    if (piece.cel === 'P') {

        if (black_pieces.some(bp => bp.cel === board.substr((piece.row - 1) * 16 + piece.col - 1, 1))) {

            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }


        if (black_pieces.some(bp => bp.cel === board.substr((piece.row - 1) * 16 + piece.col + 1, 1))) {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

    }

    if (piece.cel === 'p') {


        if (white_pieces.some(wp => wp.cel === board.substr((piece.row + 1) * 16 + piece.col + 1, 1))) {
            const possible_move = capturePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(wp => wp.cel === board.substr((piece.row + 1) * 16 + piece.col - 1, 1))) {
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