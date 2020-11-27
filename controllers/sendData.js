

 const sendData = async (websocket, action, data) => {
    try {
            resp = JSON.stringify({
                'action': action,
                'data': data
            })
            console.log(resp);
          return await websocket.sendUTF(resp)
        } catch (err) {
            console.error(err)
        }
}

module.exports = sendData
