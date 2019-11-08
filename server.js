const express = require('express');

const businessRouter = require('./config/router');

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
res.send('<h1>Lets Get this party started!<h1><br /><p> navigate to /api/projects , /api/tasks or /api/resources to begin</p>')
})
server.use('/api', logger, businessRouter);



function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.host}`
    );
  
    next();
  }

module.exports = server;