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
            let possible_white_pawns = white_pawns.filter(piece => board.substr( piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1) === ' ' || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( piece.col > 0 && (piece.row - 1) * 16 + piece.col - 1, 1))) || ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))));

            // white queens
            let white_queens = white_pieces.filter(piece => piece.cel === 'Q');
            // possible white pawns

            let possible_white_queens = white_queens.filter(piece => ((piece.row > 0) && board.substr((piece.row - 1) * 16 + piece.col, 1) == ' ') || ((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1)) )|| ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))));

            // white kings
            let white_kings = white_pieces.filter(piece => piece.cel === 'K')
            // posibble white kings
            let possible_white_kings = white_kings.filter(piece => ((piece.row > 0) && board.substr((piece.row - 1) * 16 + piece.col, 1) == ' ') || ((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1)) )|| ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))));

            //  total possible white pieces
            const possible_white_pieces = [...possible_white_pawns, ...possible_white_queens, ...possible_white_kings];

            console.log("--WHITE--");

            return possible_white_pieces;

        } else {

            //  black pawns
            let black_pawns = black_pieces.filter(piece => piece.cel === 'p');
            //  possible black pawns
            let possible_black_pawns = black_pawns.filter(piece => board.substr(((piece.row + 1) * 16) + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col < 15) && ((piece.row + 1) * 16) + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row < 15 && piece.col > 0) && ((piece.row + 1) * 16) + (piece.col - 1), 1)));

            // black queens
            let black_queens = black_pieces.filter(piece => piece.cel === 'q');
            //  possible black queens
            let possible_black_queens = black_queens.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)));

            //  black kings
            let black_kings = black_pieces.filter(piece => piece.cel === 'k');
            // possible black kings
            // let possible_black_kings = black_kings.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) == ' ');
            let possible_black_kings = black_kings.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)));

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
            const white_pieces = boards[board_id].white_pieces;
            const black_pieces = boards[board_id].black_pieces;

            const possible_pawns = possiblePieces.filter(piece => {

                if (piece.cel === 'P' || piece.cel === 'p') {

                    if (piece.color === 'white') {

                        if ( (piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1)) || (piece.row > 0 && piece.col < 15 )&& black_pieces.some(black_piece => black_piece.cel === board.substr( ((piece.row - 1) * 16) + (piece.col + 1), 1))) {

                            return piece.capture = true
                        }

                    } else {

                        if ((piece.row < 15 && piece.col < 15) && white_pieces.some(white_piece => white_piece.cel === board.substr( ((piece.row + 1) * 16) + (piece.col + 1), 1)) || (piece.row < 15 && piece.col > 0) && white_pieces.some(white_piece => white_piece.cel === board.substr( ((piece.row + 1) * 16) + (piece.col - 1), 1))) {
                            return piece.capture = true

                        };
                    }
                }
            })

            const possible_queens = possiblePieces.filter(piece => {

                if (piece.cel === 'Q' || piece.cel === 'q') {
                    if (piece.color === 'white') {

                        if ( (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1)) )|| ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) ||( (piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( piece.row * 16 + (piece.col - 1), 1)))) {

                            return piece.capture = true
                        }

                    } else {

                        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {

                            return piece.capture = true
                        };
                    }

                }
            })

            const possible_kings = possiblePieces.filter(piece => {

                if (piece.cel === 'K' || piece.cel === 'k') {
                    if (piece.color === 'white') {

                        if ( (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1)) )|| ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) ||( (piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr( piece.row * 16 + (piece.col - 1), 1)))) {

                            return piece.capture = true
                        }

                    } else {

                        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {

                            return piece.capture = true
                        };
                    }

                }
            })

            const possible_pawn_capture = possible_pawns.find(p => p.capture === true);
            const possible_queen_capture = possible_queens.find(p => p.capture === true);
            const possible_king_capture = possible_kings.find(p => p.capture === true);
            // possible_pawn = possiblePieces.find(p => (p.cel === 'p' ||  p.cel === 'P') && (p.col === 8 || p.col === 9));
            const possible_pawn = possiblePieces.find(p => (p.cel === 'P' || p.cel === 'p') && p.capture === false)
            const possible_queen = possiblePieces.find(p => (p.cel === 'Q' || p.cel === 'q') && p.capture === false)
            // const possible_king = possiblePieces.find(p => p.cel === 'k' || p.cel === 'K');

            if (possible_pawn_capture) {
                return selected_piece = possible_pawn_capture;
            }

            if (possible_queen_capture) {
                return selected_piece = possible_queen_capture;
            }

            if (possible_king_capture) {
                return selected_piece = possible_king_capture;
            }
            if (!possible_queen) {
                return selected_piece = possible_pawn;
            } else {
                return selected_piece = possible_queen;
            }
        }
        console.log(`Selected piece:`);
        console.log(selected_piece);
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

    movePawn: (from_row, from_col, color, side, value) => {
        if (side) {
            if (color === 'white') {
                if (side === 'left') {
                    if (from_col > 0) {
                        return {
                            color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                        };
                    }

                } else {
                    if (from_col < 15) {
                        return {
                            color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                        };
                    }
                }

            } else {

                if (side === 'left') {
                    if (from_col < 15) {
                        return {
                            color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                        }
                    }

                } else {
                    if (from_col > 0) {
                        return {
                            color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                        }
                    }
                }
            }

        } else {

            if (color === 'white') {
                if (from_row > 11) {
                    return {
                        color: color,
                        to_row: from_row - 2,
                        to_col: from_col,
                        value: value
                    };
                } else {
                    return {
                        color: color,
                        to_row: from_row - 1,
                        to_col: from_col,
                        value: value
                    };
                }
            } else {

                if (from_row < 4) {
                    return {
                        color: color,
                        to_row: from_row + 2,
                        to_col: from_col,
                        value: value
                    };
                } else {
                    return {
                        color: color,
                        to_row: from_row + 1,
                        to_col: from_col,
                        value: value
                    };
                }
            }
        }
    },

    moveQueen: (from_row, from_col, color, side, value) => {

        if (color === 'white') {
            switch (side) {
                // case 'up':
                //     return {
                //         color: color,
                //         to_row: from_row - 1,
                //         to_col: from_col,
                //         value: value
                //     }

                //     break;

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                    }

                    break;

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;

                case 'down-right':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break

                case 'down':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;

                case 'left':

                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col - 1,
                            value: value
                    }

                    break;
                case 'up-left':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;
                default:
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col,
                            value: value
                    }
            }

        } else {
            switch (side) {
                // case 'up':
                //     return {
                //         color: color,
                //         to_row: from_row + 1,
                //         to_col: from_col,
                //         value: value
                //     }

                //     break;

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                    }

                    break;

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;

                case 'down-right':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break

                case 'down':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;

                case 'left':

                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col + 1,
                            value: value
                    }

                    break;
                case 'up-left':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;
                default:
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
                            value: value
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

    moveKing: (from_row, from_col, color, side, value) => {

        if (color === 'white') {
            switch (side) {
                case 'up':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                    }

                    break;

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;

                case 'down-right':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break

                case 'down':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;

                case 'left':

                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col - 1,
                            value: value
                    }

                    break;
                case 'up-left':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;
            }

        } else {
            switch (side) {
                case 'up':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                    }

                    break;

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;

                case 'down-right':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                    }
                    break

                case 'down':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col,
                            value: value
                    }

                    break;

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;

                case 'left':

                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col + 1,
                            value: value
                    }

                    break;
                case 'up-left':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;
            }

            // if (color === 'white') {
            //     if (from_row === 14) {
            //         return {
            //             color: color,
            //             to_row: from_row - 1,
            //             to_col: from_col,
            //             value: value
            //         };
            //     } else {
            //         return {
            //             color: color,
            //             to_row: from_row + 1,
            //             to_col: from_col,
            //             value: value
            //         };
            //     }
            // } else {

            //     if (from_row === 1) {
            //         return {
            //             color: color,
            //             to_row: from_row + 1,
            //             to_col: from_col,
            //             value: value
            //         };
            //     } else {
            //         return {
            //             color: color,
            //             to_row: from_row - 1,
            //             to_col: from_col,
            //             value: value
            //         };
            //     }
        }
    }
}


module.exports = moves;