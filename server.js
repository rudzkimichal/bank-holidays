const express = require('express');
const app = express();



app.use(require('./app/routes')());
module.exports = app;
