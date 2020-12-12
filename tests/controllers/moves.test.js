const {
    parseBoard
} = require('../../controllers/board');
const initial_board = require('../dataTest/initialBoard.json');
const current_board = require('../dataTest/currentBoard.json');
const moves = require('../../controllers/moves');
const {
    possiblePieces,
    selectPiece,
    moveBishop
} = require('../../controllers/moves');
const strategy = require('../../controllers/strategies');


describe('se prueba el parseo del tablero', () => {

    test('al recibir la información del servidor debe retornar las piezas blancas y negras conforme al estado actual del tablero', () => {

        const data = initial_board;
        parseBoard(data.data);
        const white_pieces = boards[board_id].white_pieces;
        const black_pieces = boards[board_id].black_pieces;

        expect(white_pieces.length).toBe(64);
        expect(black_pieces.length).toBe(64);


        const current_data = current_board;
        parseBoard(current_data.data);
        const current_black_pieces = boards[board_id].black_pieces;

        expect(current_black_pieces.length).toBe(36);

    })
});

describe('Test de la función que retorna las piezas con movimientos posibles', () => {

    test('debe retornar el array con 16 piezas de un color con movimiento posible en el tablero inicial', () => {

        const data = initial_board;
        parseBoard(data.data);
        const possible_pieces = moves.possiblePieces(data.data.actual_turn, data.data.board);

        expect(possible_pieces.length).toBe(16);
    });

    test('debe retornar 23 piezas posibles en un tablero de una partida avanzada', () => {

        let board = "rrhhbbqq  bbhhrrrrhhbbqq  bbhhrrpppppppp  pppppppppppppp  ppppp                                                p                Q Q  Q      QQQ  P  P  P  P P  PPP   PP            PP   PPP PP  PP   P   P    kk P            kk      RRHHBBQQqqBBHHRRRRHHBBQQqqBBHHRR"

        expect((possiblePieces('black', board)).length).toBe(23);

    });

    test('debe impedir que un peón de segunda línea en el tablero inicial sea elegido como pieza con movimiento posible', () => {

        const data = initial_board;
        parseBoard(data.data);
        const possible_pieces = moves.possiblePieces(data.data.actual_turn, data.data.board);

        expect(possible_pieces).not.toContainEqual({
            cel: 'P',
            row: 11,
            col: 0,
            color: 'white',
            capture: false,
            value: 10,
            value_capture: 0
        });
    });

    test('debe elegir en el tablero inicial como pieza con movimiento posible solamente a los peones', () => {

        const data = initial_board;
        parseBoard(data.data);
        const possible_pieces = moves.possiblePieces(data.data.actual_turn, data.data.board);

        expect(possible_pieces.some(piece => piece.cel === 'P')).toBeTruthy();
        expect(possible_pieces.some(piece => piece.cel === 'Q' || piece.cel === 'K' || piece.cel === 'B' || piece.cel === 'R')).toBeFalsy();
    });
});

describe('se prueban movimiento de los peones', () => {

    test('debe mover dos filas en el primer movimiento', () => {

        expect(moves.movePawn(12, 0, 'white', 10)).toEqual({
            color: 'white',
            to_row: 10,
            to_col: 0,
            value: 10
        });

        expect(moves.movePawn(2, 0, 'black', 10)).toEqual({
            color: 'black',
            to_row: 4,
            to_col: 0,
            value: 10
        });
    });

    test('debe mover el peón blanco un lugar a partir de la fila 10', () => {

        const moveWPawn = moves.movePawn(10, 12, 'white', 10);
        expect(moveWPawn).toEqual({
            color: 'white',
            to_row: 9,
            to_col: 12,
            value: 10
        });
    });

    test('debe mover el peón negro un lugar a partir de la fila 4', () => {

        const moveBPawn = moves.movePawn(4, 12, 'black', 10);
        expect(moveBPawn).toEqual({
            color: 'black',
            to_row: 5,
            to_col: 12,
            value: 10
        });
    });

    test('debe comer el peón blanco hacia la izquierda', () => {

        expect(moves.movePawn(12, 15, 'white', 10, 'left')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 14,
            value: 10
        });
    });

    test('debe comer el peón blanco hacia la derecha', () => {

        expect(moves.movePawn(12, 0, 'white', 10, 'right')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 1,
            value: 10
        });
    });

    test('debe comer el peón blanco hacia la derecha', () => {

        expect(moves.movePawn(12, 0, 'white', 10, 'right')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 1,
            value: 10
        });
    });

    test('debe comer hacia la derecha el peón negro', () => {

        expect(moves.movePawn(5, 5, 'black', 10, 'right')).toEqual({
            color: 'black',
            to_row: 6,
            to_col: 4,
            value: 10
        });

    });

    test('debe impedir que al comer se salga del tablero', () => {

        expect(moves.movePawn(12, 15, 'white', 10, 'right')).toBeFalsy();

        expect(moves.movePawn(12, 0, 'white', 10, 'left')).toBeFalsy();

        expect(moves.movePawn(6, 15, 'black', 10, 'left')).toBeFalsy();

        expect(moves.movePawn(6, 0, 'black', 10, 'right')).toBeFalsy();

    });
});

describe('Se prueba que los peones no hagan movimientos inválidos', () => {

    test('debe impedir que al comer se salga del tablero (test con respuesta que no debería enviar)', () => {

        expect(moves.movePawn(12, 15, 'white', 10, 'right')).not.toBe({
            color: 'white',
            to_row: 11,
            to_col: 16,
            value: 10
        });

        expect(moves.movePawn(0, 15, 'white', 10, 'right')).not.toBe({
            color: 'white',
            to_row: -1,
            to_col: 16,
            value: 10
        });

        expect(moves.movePawn(3, 0, 'black', 10, 'right')).not.toBe({
            color: 'black',
            to_row: 4,
            to_col: -1,
            value: 10
        });

        expect(moves.movePawn(3, 15, 'black', 10, 'right')).not.toBe({
            color: 'black',
            to_row: 4,
            to_col: 16,
            value: 10
        });

    });
});

describe('se prueban algunos retornos de las distintas estrategias del rey', () => {

    test('el rey debe poder realizar correctamente los cuatro de los ocho moviementos posibles', () => {

        expect(moves.moveKing(1, 8, 'black', 100, 'up')).toEqual({
            color: 'black',
            to_row: 2,
            to_col: 8,
            value: 100
        });

        expect(moves.moveKing(1, 8, 'black', 100, 'up-right')).toEqual({
            color: 'black',
            to_row: 2,
            to_col: 7,
            value: 100
        });

        expect(moves.moveKing(1, 8, 'black', 100, 'up-right')).toEqual({
            color: 'black',
            to_row: 2,
            to_col: 7,
            value: 100
        });

        expect(moves.moveKing(1, 8, 'black', 100, 'right')).toEqual({
            color: 'black',
            to_row: 1,
            to_col: 7,
            value: 100
        });

        expect(moves.moveKing(1, 8, 'black', 100, 'down-left')).toEqual({
            color: 'black',
            to_row: 0,
            to_col: 9,
            value: 100
        });

    });
});

describe('se prueba el movimiento del alfil', () => {

    test('se prueba movimiento básico de un casillero de forma correcta', ()=>{

        expect(moveBishop(0,4,'black',40,'up-left')).toEqual({
            color: 'black',
            to_row: 1,
            to_col: 5,
            value: 40
        });
    })

    test('se prueba que la elección de la estrategia sea un movimiento válido', () => {

        let piece = {
                cel: 'b',
                row: 0,
                col: 4,
                color: 'black',
                capture: false,
                value: 40,
                value_capture: 0
        };

        let data = current_board;

        let moveBishop = strategy(piece, data.data)

        expect(moveBishop.to_row).toBe(1)
        expect(moveBishop.to_row).not.toBe(-1)

    })

})