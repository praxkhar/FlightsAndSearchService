const dotenv = require('dotenv');

dotenv.config();

// export the port
module.exports = {
    PORT: process.env.PORT
}
