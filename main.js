require('dotenv').config();

const WebSocketClient = require('websocket').client;
const client = new WebSocketClient();

// const uri = 'ws://mega-chess-qa.herokuapp.com/service?authtoken=';
// const auth_token = process.env.AUTH_TOKEN2;
const uri = 'ws://megachess.herokuapp.com/service?authtoken='
const auth_token = process.env.AUTH_TOKEN;

client.connect(uri + auth_token);

const send = require('./controllers/sendData');

const strategy = require('./controllers/strategies');
const {
    possiblePieces,
    selectPiece
} = require('./controllers/moves');

const parseBoard = require('./controllers/board');

client.on('connectFailed', async (error) => {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', async (connection) => {

    console.log('WebSocket Client Connected');

    connection.on('error', async (error) => {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', () => {
        console.log('echo-protocol Connection Closed');
        this.connection = client.connect(uri + auth_token);
    });

    connection.on('message', async (message) => {
        try {

            const {
                event,
                data
            } = JSON.parse(message.utf8Data);

            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
            }

            if (event === 'gameover') {
                if (parseInt(data.white_score) > 0 && parseInt(data.white_score) > parseInt(data.black_score)) {
                    console.log(`
                    \n----------------------------------------------------------\nCongratulations, ${data.white_username}!! You win!!! \n----------------------------------------------------------\n`);
                } else {
                    console.log(`
                    \n----------------------------------------------------------\nCongratulations, ${data.black_username}!! You win!!!\n----------------------------------------------------------\n`);
                }
            }

            // let users = data.users_list
            // console.log(users)
            // if (users) {
            //     for (const user of users) {
            //         if (user === 'matias') {
            //             let data = {
            //                     username: user,
            //                     message: "do you want to play with me?"
            //                 }
            //                 await send(connection, 'challenge', data )
            //             }
            //         }

            //         }

            if (event === 'ask_challenge') {

                await send(connection, 'accept_challenge', {
                    'board_id': data.board_id
                });
            }

            if (event === 'your_turn') {

                console.log('processing ' + data.turn_token);

                parseBoard(data);

                const possible_pieces = possiblePieces(data.actual_turn, data.board);

                if (possible_pieces) {

                    const selected_piece = selectPiece(possible_pieces, data.board);

                    console.log(`Selected piece:`);
                    console.log(selected_piece);

                    const response = strategy(selected_piece, data);
                    console.log(response);

                    await send(connection, 'move', response);

                } else {

                    await send(connection, "abort", data.board_id)
                }
            }

        } catch (err) {
            console.error(err);
        }

    });
});