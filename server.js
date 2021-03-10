const express = require('express');
const app = express();
const port = 8080;
require('./app/routes')(app);

app.listen(port, () => {console.log(`Server running on port ${port}`)});
