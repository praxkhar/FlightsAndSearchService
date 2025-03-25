const express = require('express')
const router = express.Router()

const v1ApiRoutes = require('./v1/index')

router.use('/v1', v1ApiRoutes) //** Whenever someone will call (/v1) ,they are going to map it with (v1ApiRoutes) */


module.exports = router