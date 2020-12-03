const moves = require('../../controllers/moves');
const parseBoard = require('../../controllers/board')
const initialBoard = require('../dataTest/initialBoard.json');

describe('Test de las piezas con movimientos posibles', () => {
    test('debe retornar 16 piezas con movimiento en el tablero inicial', () => {

        const data = initialBoard;
        parseBoard(data.data)
        const posiblesPieces = moves.possiblePieces(data.data.actual_turn, data.data.board);

        expect(posiblesPieces.length).toBe(16)
    })
})


describe('se prueban movimiento de los peones', () => {

    test('debe mover dos filas en el primer movimiento', () => {

        expect(moves.movePawn(12, 0, 'white')).toEqual({
            color: 'white',
            to_row: 10,
            to_col: 0
        });

        const moveBPawn = moves.movePawn(3, 0, 'black');
        expect(moveBPawn).toEqual({
            color: 'black',
            to_row: 5,
            to_col: 0
        });
    })

    test('debe mover el peón blanco un lugar', () => {

        const moveWPawn = moves.movePawn(10, 12, 'white');
        expect(moveWPawn).toEqual({
            color: 'white',
            to_row: 9,
            to_col: 12
        });
    })

    test('debe mover el peón negro un lugar', () => {

        const moveBPawn = moves.movePawn(4, 12, 'black');
        expect(moveBPawn).toEqual({
            color: 'black',
            to_row: 5,
            to_col: 12
        });
    })

    test('debe comer el peón blanco hacia la izquierda', () => {

        expect(moves.capturePawn(12, 15, 'white', 'left')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 14
        })
    })

    test('debe comer el peón blanco hacia la derecha', () => {

        expect(moves.capturePawn(12, 0, 'white', 'right')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 1
        })
    })

    test('debe impedir que al comer se salga del tablero', () => {

        expect(moves.capturePawn(12, 15, 'white', 'right')).toBeFalsy()

    })

    test('debe impedir que al comer se salga del tablero', () => {

        expect(moves.capturePawn(6, 15, 'black', 'left')).toBeFalsy()

    })

    test('debe comer hacia la derecha el peón negro', () => {

        expect(moves.capturePawn(5, 5, 'black', 'right')).toEqual({
            color: 'black',
            to_row: 6,
            to_col: 4
        })
    })

})