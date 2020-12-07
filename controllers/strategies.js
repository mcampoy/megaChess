const parseBoard = require('./board');
const {
    move,
    moveQueen,
    movePawn,
    moveKing,
} = require('./moves');

const strategy = (piece, data) => {

    parseBoard(data);
    const white_pieces = boards[board_id].white_pieces;
    const black_pieces = boards[board_id].black_pieces;

    if (piece.cel === 'P') {

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col - 1), 1))) {

            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }


        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

    }

    if (piece.cel === 'p') {


        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + ((piece.col - 1)), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'Q') {

        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ' || black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1 * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }


        if (black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'q') {
        // if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ') {
        //     const possible_move = moveQueen(piece.row, piece.col, data.actual_turn);
        //     return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        // }

        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1 * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'K') {
        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ' || black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up');
            console.log(possible_move)
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1 * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }


        if (black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'k') {
        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1 * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'right-down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }
}

module.exports = strategy