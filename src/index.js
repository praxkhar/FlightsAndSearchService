const express = require('express');
const {PORT} = require('./config/ServerConfig');

const SetupAndStartServer = async () => {
    // create express object
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}

SetupAndStartServer();
