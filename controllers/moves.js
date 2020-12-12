const moves = {

    possiblePieces: (turn, board) => {

        const white_pieces = boards[board_id].white_pieces;
        const black_pieces = boards[board_id].black_pieces;

        if (turn === 'white') {

            // white pawns
            let white_pawns = white_pieces.filter(piece => piece.cel === 'P');
            // possible white pawns
            let possible_white_pawns = white_pawns.filter(piece => board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1) === ' ' || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.col > 0 && (piece.row - 1) * 16 + piece.col - 1, 1))) || ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))));

            // white queens
            let white_queens = white_pieces.filter(piece => piece.cel === 'Q');
            // possible white pawns
            let possible_white_queens = white_queens.filter(piece => ((piece.row > 0) && board.substr((piece.row - 1) * 16 + piece.col, 1) == ' ') || ((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))));

            // white kings
            let white_kings = white_pieces.filter(piece => piece.cel === 'K');
            // posibble white kings
            let possible_white_kings = white_kings.filter(piece => ((piece.row > 0) && board.substr((piece.row - 1) * 16 + piece.col, 1) == ' ') || ((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))));

            // white rooks
            let white_rooks = white_pieces.filter(piece => piece.cel === 'R');
            let possible_white_rook = white_rooks.filter(piece => ((piece.row > 0) && board.substr((piece.row - 1) * 16 + piece.col, 1) == ' ') || ((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1))));

            // white_bishops
            let white_bishops = white_pieces.filter(piece => piece.cel === 'B');
            let possible_white_bishop = white_bishops.filter(piece => (piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1)))

            //  total possible white pieces
            const possible_white_pieces = [...possible_white_pawns, ...possible_white_queens, ...possible_white_kings, ...possible_white_rook, ...possible_white_bishop];

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
            let possible_black_queens = black_queens.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)));

            //  black kings
            let black_kings = black_pieces.filter(piece => piece.cel === 'k');
            // possible black kings
            let possible_black_kings = black_kings.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)));

            let black_rooks = black_pieces.filter(piece => piece.cel === 'r');
            let possible_black_rooks = black_rooks.filter(piece => board.substr((piece.row + 1) * 16 + piece.col, 1) === ' ' || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1)));

            let black_bishops = black_pieces.filter(piece => piece.cel === 'b');
            let possible_black_bishops = black_bishops.filter(piece => white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1)));

            // total possible black pieces
            const possible_black_pieces = [...possible_black_pawns, ...possible_black_queens, ...possible_black_kings, ...possible_black_bishops, ...possible_black_rooks];

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

                        if ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1)) || (piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col + 1), 1))) {
                            return piece.capture = true
                        }

                    } else {

                        if ((piece.row < 15 && piece.col < 15) && white_pieces.some(white_piece => white_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1)) || (piece.row < 15 && piece.col > 0) && white_pieces.some(white_piece => white_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col - 1), 1))) {
                            return piece.capture = true

                        }
                    }
                }
            });

            const possible_queens = possiblePieces.filter(piece => {

                if (piece.cel === 'Q' || piece.cel === 'q') {
                    if (piece.color === 'white') {

                        if ((piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)))) {

                            return piece.capture = true;

                        }

                    } else {

                        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {

                            return piece.capture = true;

                        };
                    }

                }
            });

            const possible_kings = possiblePieces.filter(piece => {

                if (piece.cel === 'K' || piece.cel === 'k') {
                    if (piece.color === 'white') {

                        if ((piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.row > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1))) || (piece.col < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row + 1) * 16) + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)))) {

                            return piece.capture = true;

                        }

                    } else {

                        if (white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && (piece.row - 1) * 16 + piece.col, 1))) {

                            return piece.capture = true
                        }
                    }

                }
            });

            const possible_rooks = possiblePieces.filter(piece => {

                if (piece.cel === 'R' || piece.cel === 'r') {
                    if (piece.color === 'white') {

                        if (((piece.row > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + piece.col, 1))) || (piece.col < 15 && black_pieces.some(black_pieces => black_pieces.cel === board.substr(piece.row * 16 + (piece.col + 1), 1))) || (piece.row < 15 && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + piece.col, 1))) || (piece.col > 0 && black_pieces.some(black_piece => black_piece.cel === board.substr(piece.row * 16 + (piece.col - 1), 1)))) {

                            return piece.capture = true;
                        }

                    } else {

                        if (white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row < 15 && (piece.row + 1) * 16 + piece.col, 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col > 0 && piece.row * 16 + (piece.col - 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.col < 15 && (piece.row * 16) + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr(piece.row > 0 && ((piece.row - 1) * 16) + piece.col, 1))) {

                            return piece.capture = true;
                        }
                    }
                }
            });

            const possible_bishops = possiblePieces.filter(piece => {

                if (piece.cel === 'B' || piece.cel === 'b') {
                    if (piece.color === 'white') {

                        if ((piece.row > 0 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row - 1) * 16 + (piece.col + 1), 1)) || ((piece.row < 15 && piece.col < 15) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col + 1), 1))) || ((piece.row < 15 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr((piece.row + 1) * 16 + (piece.col - 1), 1))) || ((piece.row > 0 && piece.col > 0) && black_pieces.some(black_piece => black_piece.cel === board.substr(((piece.row - 1) * 16) + (piece.col - 1), 1)))) {

                            return piece.capture = true;
                        }

                    } else {

                        if (white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col > 0) && (piece.row + 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row < 15 && piece.col < 15) && (piece.row + 1) * 16 + (piece.col + 1), 1)) || white_pieces.some(white_piece => white_piece.cel === board.substr((piece.row > 0 && piece.col > 0) && (piece.row - 1) * 16 + (piece.col - 1), 1)) || white_pieces.some(white_pieces => white_pieces.cel === board.substr((piece.row > 0 && piece.col < 15) && (piece.row - 1) * 16 + (piece.col + 1), 1))) {

                            return piece.capture = true;
                        };
                    }
                }
            });

            const possible_pawn_capture = possible_pawns.find(piece => piece.capture === true);
            const possible_queen_capture = possible_queens.find(piece => piece.capture === true);
            const possible_king_capture = possible_kings.find(piece => piece.capture === true);
            const possible_pawn = possiblePieces.find(piece => (piece.cel === 'P' || piece.cel === 'p') && piece.capture === false);
            const possible_queen = possiblePieces.find(piece => (piece.cel === 'Q' || piece.cel === 'q') && piece.capture === false);
            const possible_king = possiblePieces.find(piece => piece.cel === 'K' || piece.cel === 'k');
            const possible_bishop_capture = possible_bishops.find(piece => piece.cel === 'B' || piece.cel === 'b');
            const possible_rook_capture = possible_rooks.find(piece => piece.cel === 'R' || piece.cel === 'r');

            if (possible_pawn_capture) {

                return selected_piece = possible_pawn_capture;

            }

            if (possible_rook_capture) {

                return selected_piece = possible_rook_capture;

            }

            if (possible_bishop_capture) {

                return selected_piece = possible_bishop_capture;

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

    movePawn: (from_row, from_col, color, value, side) => {
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
                    }

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
                    }
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

    moveQueen: (from_row, from_col, color, value, side) => {

        if (color === 'white') {
            switch (side) {

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

    moveKing: (from_row, from_col, color, value, side) => {

        if (color === 'white') {
            switch (side) {

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

    moveBishop: (from_row, from_col, color, value, side) => {

        if (color === 'white') {
            switch (side) {

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row - 1,
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

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row + 1,
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
                    if (from_col > 0) {
                        return {
                            color: color,
                            to_row: from_row - 1,
                            to_col: from_col + 1,
                            value: value
                        }
                    }

                    if (from_col < 15) {
                        return {
                            color: color,
                            to_row: from_row - 1,
                            to_col: from_col - 1,
                            value: value
                        }
                    }
            }


        } else {
            switch (side) {

                case 'up-right':
                    return {
                        color: color,
                            to_row: from_row + 1,
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

                case 'down-left':
                    return {
                        color: color,
                            to_row: from_row - 1,
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
                    if (from_col > 0) {
                        return {
                            color: color,
                            to_row: from_row + 1,
                            to_col: from_col - 1,
                            value: value
                        }
                    }
                    if (from_col < 15) {
                        return {
                            color: color,
                            to_row: from_row + 1,
                            to_col: from_col + 1,
                            value: value
                        }
                    }
            }
        }
    },

    moveRook: (from_row, from_col, color, value, side) => {

        if (color === 'white') {
            switch (side) {

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col + 1,
                            value: value
                    }
                    break;

                case 'down':
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
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

                case 'right':
                    return {
                        color: color,
                            to_row: from_row,
                            to_col: from_col - 1,
                            value: value
                    }
                    break;

                case 'down':
                    return {
                        color: color,
                            to_row: from_row - 1,
                            to_col: from_col,
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

                default:
                    return {
                        color: color,
                            to_row: from_row + 1,
                            to_col: from_col,
                            value: value
                    }
            }
        }
    }
};


module.exports = moves;