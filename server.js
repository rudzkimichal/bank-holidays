const express = require('express');
const app = express();
const port = 8080;


app.use(require('./app/routes')());
app.listen(port, () => {console.log(`Server running on port ${port}`)});
