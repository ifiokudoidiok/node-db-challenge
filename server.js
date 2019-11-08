const express = require('express');

const businessRouter = require('./config/router');

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
res.send('<h1>Lets Get this party started!<h1><br /><p> navigate to /api/projects to begin</p>')
})
server.use('/api', businessRouter);

module.exports = server;