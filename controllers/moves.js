// const random = require('./random');
 
// function random2(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }

const moves = {

    possiblePieces: (turn, board) => {

        const white_pieces = boards[board_id].white_pieces;
        const black_pieces = boards[board_id].black_pieces;

        if (turn === 'white') {

            // white pawns
            let white_pawns = white_pieces.filter(piece => piece.cel === 'P');
            // possible white pawns
            let possible_white_pawns = white_pawns.filter(piece => board.substr((piece.row - 1) * 16 + piece.col, 1)  === ' ' || black_pieces.some(bp => bp.cel === board.substr((piece.row - 1) * 16 + piece.col - 1, 1)) || black_pieces.some(bp => bp.cel === board.substr((piece.row - 1) * 16 + piece.col + 1, 1)));

            // white queens
            let white_queens = white_pieces.filter(piece => piece.cel === 'Q');
            // possible white pawns
            let possible_white_queens = white_queens.filter(p => board.substr((p.row - 1) * 16 + p.col, 1) == ' ' || black_pieces.some(bp => bp.cel === board.substr((p.row - 1) * 16 + p.col, 1)))

            // white kings
            let white_kings = white_pieces.filter(piece => piece.cel === 'K')
            // posibble white kings
            let possible_white_kings = white_kings.filter(p => board.substr((p.row - 1) * 16 + p.col, 1) == ' ');

            //  total possible white pieces
            const possible_white_pieces = [...possible_white_pawns, ...possible_white_queens, ...possible_white_kings];

            console.log("--WHITE--");

            return possible_white_pieces;

        } else {

            //  black pawns
            let black_pawns = black_pieces.filter(piece => piece.cel === 'p');
            //  possible black pawns
            let possible_black_pawns = black_pawns.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ' || white_pieces.some( wp => wp.cel === board.substr((p.row + 1) * 16 + p.col + 1, 1)) || white_pieces.some( wp => wp.cel === board.substr((p.row + 1) * 16 + p.col - 1, 1)) );

            // black queens
            let black_queens = black_pieces.filter(piece => piece.cel === 'q');
            //  possible black queens
            let possible_black_queens = black_queens.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ' ||  white_pieces.some( wp => wp.cel === board.substr((p.row + 1) * 16 + p.col, 1)) )
            //  black kings
            let black_kings = black_pieces.filter(piece => piece.cel === 'k');
            // possible black kings
            let possible_black_kings = black_kings.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ');

            // total possible black pieces
            const possible_black_pieces = [...possible_black_pawns, ...possible_black_queens, ...possible_black_kings];

            console.log("--BLACK--");

            return possible_black_pieces.reverse();
        }
    },

    selectPiece: (possiblePieces, board) => {

        console.log('selecting Piece!');

        let selected_piece = null;

        while (!selected_piece) {

            const possible_pawns = possiblePieces.filter(p => {

                if (p.cel === 'p' || p.cel === 'P') {

                    if (p.color === 'white') {

                        if (board.substr((p.row - 1) * 16 + p.col - 1, 1) === 'q' ||
                            board.substr((p.row - 1) * 16 + p.col - 1, 1) === 'r' ||
                            board.substr((p.row - 1) * 16 + p.col + 1, 1) === 'q' ||
                            board.substr((p.row - 1) * 16 + p.col + 1, 1) === 'r') {
                            return p.capture = true
                        }

                    } else {

                        if (board.substr((p.row + 1) * 16 + p.col + 1, 1) === 'Q' ||
                            board.substr((p.row + 1) * 16 + p.col + 1, 1) === 'R' ||
                            board.substr((p.row + 1) * 16 + p.col - 1, 1) === 'Q' ||
                            board.substr((p.row + 1) * 16 + p.col - 1, 1) === 'R') {
                            return p.capture = true
                        }
                    }
                }
            })

            const possible_pawn_capture = possible_pawns.find(p => p.capture === true)
            // possible_pawn = posiblesPieces.find(p => (p.cel === 'p' ||  p.cel === 'P') && (p.col === 8 || p.col === 9));
            const possible_pawn = possiblePieces.find(p => p.capture === false)
            // const possible_pawn = possiblePieces.find( p => p.cel === 'p' || p.cel === 'P')
            const possible_queen = possiblePieces.find(p => p.cel === 'q' || p.cel === 'Q');
            const possible_king = possiblePieces.find(p => p.cel === 'k' || p.cel === 'K');

            if (possible_pawn_capture) {
                return selected_piece = possible_pawn_capture;
            }

            if (possible_king) {
                return selected_piece = possible_king;
            }
            if (!possible_queen) {
                return selected_piece = possible_pawn;
            } else {
                return selected_piece = possible_queen;
            }
        }
    },

    move: ({
        board_id,
        turn_token
    }, from_row, from_col, to_row, to_col) => {

        return ({
            board_id: board_id,
            turn_token: turn_token,
            from_row: from_row,
            from_col: from_col,
            to_row: to_row,
            to_col: to_col,
        });
    },

    movePawn: (from_row, from_col, color) => {

        if (color === 'white') {
            if (from_row > 11) {
                return {
                    color: color,
                    to_row: from_row - 2,
                    to_col: from_col
                };
            } else {
                return {
                    color: color,
                    to_row: from_row - 1,
                    to_col: from_col
                };
            }
        } else {

            if (from_row < 4) {
                return {
                    color: color,
                    to_row: from_row + 2,
                    to_col: from_col
                };
            } else {
                return {
                    color: color,
                    to_row: from_row + 1,
                    to_col: from_col
                };
            }
        }
    },

    capturePawn: (from_row, from_col, color, side) => {

        if (color === 'white') {
            if (side === 'left') {
                if (from_col > 0) {
                    return {
                        color: color,
                        to_row: from_row - 1,
                        to_col: from_col - 1
                    };
                }

            } else {
                if (from_col < 15) {
                    return {
                        color: color,
                        to_row: from_row - 1,
                        to_col: from_col + 1
                    };
                }
            }

        } else {

            if (side === 'left') {
                if (from_col < 15) {
                    return {
                        color: color,
                        to_row: from_row + 1,
                        to_col: from_col + 1
                    }
                }

            } else {
                if (from_col > 0) {
                    return {
                        color: color,
                        to_row: from_row + 1,
                        to_col: from_col - 1
                    }
                }
            }
        }

    },

    moveQueen: (from_row, from_col, color) => {

        if (color === 'white') {
            if (from_row > 0) {
                return {
                    color: color,
                    to_row: from_row - 1,
                    to_col: from_col
                }
            }

        } else {
            if (from_row < 15) {
                return {
                    color: color,
                    to_row: from_row + 1,
                    to_col: from_col
                }
            }

        }

    },

    // moveHorse: (from_row, from_col, color) => {
    //     const base = random2(1, 2)

    //     if (color === 'white') {

    //         if (base === 2) {
    //             return {
    //                 to_row: from_row - 1,
    //                 to_col: from_col - base,
    //             }

    //         } else {
    //             return {
    //                 to_row: from_row - 2,
    //                 to_col: from_col - base,
    //             }
    //         }

    //     } else {

    //         if (base === 2) {
    //             return {
    //                 to_row: from_row + 1,
    //                 to_col: from_col + base,
    //             }

    //         } else {
    //             return {
    //                 to_row: from_row + 2,
    //                 to_col: from_col + base,
    //             }

    //         }
    //     }
    // },

    moveKing: (from_row, from_col, color) => {

        if (color === 'white') {
            if (from_row === 14) {
                return {
                    color: color,
                    to_row: from_row - 1,
                    to_col: from_col
                };
            } else {
                return {
                    color: color,
                    to_row: from_row + 1,
                    to_col: from_col
                };
            }
        } else {

            if (from_row === 1) {
                return {
                    color: color,
                    to_row: from_row + 1,
                    to_col: from_col
                };
            } else {
                return {
                    color: color,
                    to_row: from_row - 1,
                    to_col: from_col
                };
            }
        }
    }
}


module.exports = moves;