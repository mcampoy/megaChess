// const random = require('./random');

// function random2(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }

const moves = {

    possiblePieces: (turn, board) => {
        const white_pieces = boards[board_id].white_pieces;
        const black_pieces = boards[board_id].black_pieces;

        if (turn === 'white') {

            let white_pawns = white_pieces.filter(piece => piece.cel === 'P');
            let possibles_white_pawns = white_pawns.filter(p => board.substr((p.row - 1) * 16 + p.col, 1) == ' ');

            let white_queens = white_pieces.filter(piece => piece.cel === 'Q');
            let possibles_white_queens = white_queens.filter(p => board.substr((p.row - 1) * 16 + p.col, 1) == ' ' || board.substr((p.row - 1) * 16 + p.col, 1) == 'p' || board.substr((p.row - 1) * 16 + p.col, 1) == 'q' || board.substr((p.row - 1) * 16 + p.col, 1) == 'h' || board.substr((p.row - 1) * 16 + p.col, 1) == 'r' || board.substr((p.row - 1) * 16 + p.col, 1) == 'k' || board.substr((p.row - 1) * 16 + p.col, 1) == 'b');

            let white_kings = white_pieces.filter(piece => piece.cel === 'K')
            let possibles_white_kings = white_kings.filter(p => board.substr((p.row - 1) * 16 + p.col, 1) == ' ');

            const possible_white_pieces = [...possibles_white_pawns, ...possibles_white_queens, ...possibles_white_kings];

            console.log("--WHITE--");

            return possible_white_pieces;

        } else {

            let black_pawns = black_pieces.filter(piece => piece.cel === 'p');
            let possible_black_pawns = black_pawns.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ');

            let black_Queens = black_pieces.filter(piece => piece.cel === 'q');
            let possible_black_queens = black_Queens.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ' || board.substr((p.row + 1) * 16 + p.col, 1) == 'P' || board.substr((p.row + 1) * 16 + p.col, 1) == 'Q' || board.substr((p.row + 1) * 16 + p.col, 1) == 'H' || board.substr((p.row + 1) * 16 + p.col, 1) == 'R' || board.substr((p.row + 1) * 16 + p.col, 1) == 'K' || board.substr((p.row + 1) * 16 + p.col, 1) == 'B');

            let black_kings = black_pieces.filter(piece => piece.cel === 'k');
            let possible_black_kings = black_kings.filter(p => board.substr((p.row + 1) * 16 + p.col, 1) == ' ');

            const possibles_black_pieces = [...possible_black_pawns, ...possible_black_queens, ...possible_black_kings];

            console.log("--BLACK--");

            return possibles_black_pieces.reverse();
        }
    },

    selectPiece: (posiblesPieces) => {

        console.log('selecting Piece!');

        let selected_piece = null;

        while (!selected_piece) {

            const possible_pawn = posiblesPieces.find(p => p.cel === 'p' || p.cel === 'P');
            // possible_pawn = posiblesPieces.find(p => (p.cel === 'p' ||  p.cel === 'P') && (p.col === 8 || p.col === 9));
            const possible_queen = posiblesPieces.find(p => p.cel === 'q' || p.cel === 'Q');
            const possible_king = posiblesPieces.find(p => p.cel === 'k' || p.cel === 'K');

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
            if (from_row === 12 || from_row === 13) {
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

            if (from_row === 2 || from_row === 3) {
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
                } else {
                    return 'invalid move'
                };

            } else {
                if (from_col < 15) {
                    return {
                        color: color,
                        to_row: from_row - 1,
                        to_col: from_col + 1
                    };
                } else {
                    return 'invalid move'
                };
            };

        } else {

            if (side === 'left') {
                if (from_col < 15) {
                    return {
                        color: color,
                        to_row: from_row + 1,
                        to_col: from_col + 1
                    }
                } else {
                    return 'invalid move'
                };

            } else {
                if (from_col > 0) {
                    return {
                        color: color,
                        to_row: from_row + 1,
                        to_col: from_col - 1
                    }
                } else {
                    return 'invalid move'
                };

            }
        }

    },

    moveQueen: (from_row, from_col, color) => {

        // distance = random(6);
        // vertical = random(3) - 1;
        // horizontal = random(3) - 1;

        // if (color === 'white') {
        //     let rowW = from_row - (distance * vertical);
        //     let colW = from_col - (distance * vertical);
        //     console.log('row: ' + rowW)
        //     console.log('col: ' + colW)
        //     if ((rowW < 14 && colW > 0)) {

        //         return {
        //             to_row: rowW,
        //             to_col: colW,
        //         }
        //     } else {

        //         return {
        //             to_row: from_row - (distance * vertical),
        //             to_col: from_col - (distance * horizontal)
        //         }
        //     }

        // } else {
        //     let rowB = from_row + (distance * vertical);
        //     let colB = from_col + (distance * vertical);
        //     console.log('row: ' + rowB)
        //     console.log('col: ' + colB)
        //     if ((rowB > 0 && colB > 0)) {

        //         return {
        //             to_row: rowB,
        //             to_col: colB,
        //         }
        //     } else {

        //         return {
        //             to_row: from_row + (distance * vertical),
        //             to_col: from_col + (distance * horizontal)
        //         }
        //     }
        // }
        if (color === 'white') {

            return {
                color: color,
                to_row: from_row - 1,
                to_col: from_col
            }

        } else {

            return {
                color: color,
                to_row: from_row + 1,
                to_col: from_col
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
    //     distance = random(2);
    //     vertical = random(3) - 1;
    //     horizontal = random(3) - 1;

    //     if (color === 'white') {
    //         let rowW = from_row - (distance * vertical);
    //         let colW = from_col - (distance * horizontal);
    //         console.log('row: ' + rowW)
    //         console.log('col: ' + colW)
    //         if ((rowW < 15 && colW > 0)) {

    //             return {
    //                 to_row: rowW,
    //                 to_col: colW,
    //             }
    //         } else {

    //             return {
    //                 to_row: from_row - (distance * vertical),
    //                 to_col: from_col - (distance * horizontal)
    //             }
    //         }

    //     } else {
    //         let rowB = from_row + (distance * vertical);
    //         let colB = from_col + (distance * horizontal);
    //         console.log('row: ' + rowB)
    //         console.log('col: ' + colB)
    //         if ((rowB > 0 && colB > 0)) {

    //             return {
    //                 to_row: rowB,
    //                 to_col: colB,
    //             }
    //         } else {

    //             return {
    //                 to_row: from_row + (distance * vertical),
    //                 to_col: from_col + (distance * horizontal)
    //             }
    //         }
    //     }
    // }

}


module.exports = moves;