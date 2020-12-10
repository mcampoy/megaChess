const moves = require('../../controllers/moves');
const parseBoard = require('../../controllers/board')
const initial_board = require('../dataTest/initialBoard.json');
const {
    possiblePieces,
    selectPiece
} = require('../../controllers/moves');


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

    test('debe impedir que un peon de segudna líena en el tablero inicial sea elegido como pieza con movimiento posible', () => {

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
        })
    })
});


describe('se prueba la función de seleccionar una pieza', () => {

    test('entre las piezas posibles establece qué piezas tiene la posibilidad de capturar una pieza rival', () => {

        let board = "rrhhbbqqkkbbhhrrrrhhbb qkkbbhhrrpp p p ppppppppp p p p  pp                            q   p           Q        P            PP P P P P P PPPPPPP P PRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
        const possible_pieces = moves.possiblePieces('black', board);
        // console.log(possible_pieces)
        let possible_capture = selectPiece(possible_pieces, board)
        console.log(possible_capture)
        // expect(possible_capture)

    })


})


describe('se prueban movimiento de los peones', () => {

    test('debe mover dos filas en el primer movimiento', () => {

        expect(moves.movePawn(12, 0, 'white')).toEqual({
            color: 'white',
            to_row: 10,
            to_col: 0
        });

        expect(moves.movePawn(2, 0, 'black')).toEqual({
            color: 'black',
            to_row: 4,
            to_col: 0
        });
    })

    test('debe mover el peón blanco un lugar a partir de la fila 10', () => {

        const moveWPawn = moves.movePawn(10, 12, 'white');
        expect(moveWPawn).toEqual({
            color: 'white',
            to_row: 9,
            to_col: 12
        });
    })

    test('debe mover el peón negro un lugar a partir de la fila 4', () => {

        const moveBPawn = moves.movePawn(4, 12, 'black');
        expect(moveBPawn).toEqual({
            color: 'black',
            to_row: 5,
            to_col: 12
        });
    })

    test('debe comer el peón blanco hacia la izquierda', () => {

        expect(moves.movePawn(12, 15, 'white', 'left')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 14
        })
    })

    test('debe comer el peón blanco hacia la derecha', () => {

        expect(moves.movePawn(12, 0, 'white', 'right')).toEqual({
            color: 'white',
            to_row: 11,
            to_col: 1
        })
    })

    test('debe impedir que al comer se salga del tablero', () => {

        expect(moves.movePawn(12, 15, 'white', 'right')).toBeFalsy()

    })

    test('debe impedir que al comer se salga del tablero', () => {

        expect(moves.movePawn(6, 15, 'black', 'left')).toBeFalsy()

    })

    test('debe comer hacia la derecha el peón negro', () => {

        expect(moves.movePawn(5, 5, 'black', 'right')).toEqual({
            color: 'black',
            to_row: 6,
            to_col: 4
        })
    })

})