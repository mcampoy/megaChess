const { parseBoard } = require('./board');
const {
    move,
    moveQueen,
    movePawn,
    moveKing,
    moveRook,
    moveBishop
} = require('./moves');

const strategy = (piece, data) => {

    parseBoard(data);
    const white_pieces = boards[board_id].white_pieces;
    const black_pieces = boards[board_id].black_pieces;

    if (piece.cel === 'P') {

        if ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ( (piece.row > 0 && piece. col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(  ((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, piece.value);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

    }

    if (piece.cel === 'p') {

        if ((piece.col < 15 && piece.row < 15) &&  white_pieces.some(white_piece => white_piece.cel === board.substr( ((piece.row + 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col > 0) &&  white_pieces.some(white_piece => white_piece.cel === board.substr( ((piece.row + 1) * 16) + ((piece.col - 1)), 1))) {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ') {
            const possible_move = movePawn(piece.row, piece.col, data.actual_turn);
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col, piece.value);
        }
    }

    if (piece.cel === 'Q') {

        if (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }


        if ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( (piece.row - 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1)))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'q') {

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col > 0) && ((piece.row + 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col > 0) && (piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && ((piece.row - 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col < 15) && ((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col < 15) && piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
        if (board.substr(((piece.row + 1) * 16) + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && ((piece.row + 1) * 16) + piece.col, 1))) {
            const possible_move = moveQueen(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'K') {

        if (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( (piece.row - 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1)))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'k') {

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col > 0) && ((piece.row + 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col > 0) && (piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && ((piece.row - 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col < 15) && ((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col < 15) && piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
        if (board.substr(((piece.row + 1) * 16) + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && ((piece.row + 1) * 16) + piece.col, 1))) {
            const possible_move = moveKing(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'B') {

        if ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( (piece.row - 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'b') {

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col > 0) && ((piece.row + 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'up-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'up-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && ((piece.row - 1) * 16) + (piece.col - 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'down-right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col < 15) && ((piece.row - 1) * 16) + (piece.col + 1), 1))) {
            const possible_move = moveBishop(piece.row, piece.col, data.actual_turn, piece.value, 'down-left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'R') {
        if ((piece.row > 0 && board.substr((piece.row - 1) * 16 + piece.col, 1) === ' ') || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1)))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
        if (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }    if (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }

    if (piece.cel === 'r') {

        if (board.substr(((piece.row + 1) * 16) + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && ((piece.row + 1) * 16) + piece.col, 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'up');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col > 0) && (piece.row * 16) + (piece.col - 1), 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'right');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }

        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.col < 15) && piece.row * 16 + (piece.col + 1), 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'left');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {
            const possible_move = moveRook(piece.row, piece.col, data.actual_turn, piece.value, 'down');
            return move(data, piece.row, piece.col, possible_move.to_row, possible_move.to_col);
        }
    }
}

module.exports = strategy