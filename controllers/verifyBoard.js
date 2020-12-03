

async function verify(pieceToVerify, color) {

    if (color === 'white') {

        forward = board.substr((pieceToVerify.row - 1) * 16 + pieceToVerify.col, 1);
        back = board.substr((pieceToVerify.row + 1) * 16 + pieceToVerify.col, 1);
        left = board.substr((pieceToVerify.row - 1) * 16 + pieceToVerify.col - 1, 1);
        rigth = board.substr((pieceToVerify.row - 1) * 16 + pieceToVerify.col + 1, 1);

    } else {

        forward = board.substr((pieceToVerify.row + 1) * 16 + pieceToVerify.col, 1);
        back = board.substr((pieceToVerify.row - 1) * 16 + pieceToVerify.col, 1);
        left = board.substr((pieceToVerify.row + 1) * 16 + pieceToVerify.col + 1, 1);
        rigth = board.substr((pieceToVerify.row + 1) * 16 + pieceToVerify.col - 1, 1);

    }

    return await {
        forward,
        back,
        left,
        rigth
    }

}

module.exports = verify;