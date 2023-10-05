const express = require('express');
const path = require('path');
const app = express();

const host = "localhost";
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
