const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index')
// const { City, Airport } = require('./models/index');

const SetupAndStartServer = async () => {   // there is no need of async fnc but later we will do DB connection or somthing else which might be async
    // create express object
    const app = express();

    // parse the body of the request
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // Mapping (/api) with V1
    app.use('/api', ApiRoutes)

    // start the server
    app.listen(PORT, async () => {
        console.log(`Server started on port ${PORT}`);
        //syncing with environment
        if (process.env.SYNC_DB) {
            db.sequelize.sync({alert:true})
        }
    })
}

SetupAndStartServer(); 
