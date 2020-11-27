const {
    move,
    moveQueen,
    movePawn,
    moveKing,
    capturePawn
} = require('./moves');


const possibleMove = (selectedPiece, data) => {

    const piece = selectedPiece.cel;

    if (piece === 'p') {

        if (board.substr((selectedPiece.row + 1) * 16 + selectedPiece.col + 1, 1) === 'Q') {
            const posible_move = capturePawn(selectedPiece.row, selectedPiece.col, data.actual_turn, 'left');
            const resp = move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
            return resp;
        }

        if (board.substr((selectedPiece.row + 1) * 16 + selectedPiece.col - 1, 1) === 'Q') {
            const posible_move = capturePawn(selectedPiece.row, selectedPiece.col, data.actual_turn, 'right');
            const resp = move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
            return resp;
        }

        if (board.substr((selectedPiece.row + 1) * 16 + selectedPiece.col, 1) === ' ') {
            const posible_move = movePawn(selectedPiece.row, selectedPiece.col, data.actual_turn);
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }

    }

    if (piece === 'P') {

        if (board.substr((selectedPiece.row - 1) * 16 + selectedPiece.col - 1, 1) === 'q') {
            const posible_move = capturePawn(selectedPiece.row, selectedPiece.col, data.actual_turn, 'left');
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }

        if (board.substr((selectedPiece.row - 1) * 16 + selectedPiece.col + 1, 1) === 'q') {
            const posible_move = capturePawn(selectedPiece.row, selectedPiece.col, data.actual_turn, 'right');
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }

        if (board.substr((selectedPiece.row - 1) * 16 + selectedPiece.col, 1) === ' ') {
            const posible_move = movePawn(selectedPiece.row, selectedPiece.col, data.actual_turn);
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }

    }

    if (piece === 'q' || piece === 'Q') {
        const posible_move = moveQueen(selectedPiece.row, selectedPiece.col, data.actual_turn);
        return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
    }

    if (piece === 'K') {
        if (board.substr((selectedPiece.row - 1) * 16 + selectedPiece.col, 1) === ' ') {
            const posible_move = moveKing(selectedPiece.row, selectedPiece.col, data.actual_turn);
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }
    }

    if (piece === 'k') {
        if (board.substr((selectedPiece.row + 1) * 16 + selectedPiece.col, 1) === ' ') {
            const posible_move = moveKing(selectedPiece.row, selectedPiece.col, data.actual_turn);
            return move(data, selectedPiece.row, selectedPiece.col, posible_move.to_row, posible_move.to_col);
        }
    }
}

module.exports = possibleMove