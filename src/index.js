const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/ServerConfig');

const SetupAndStartServer = async () => {
    // create express object
    const app = express();

    // parse the body of the request
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // start the server
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}

SetupAndStartServer(); 
