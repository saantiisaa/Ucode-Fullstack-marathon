const express = require('express');
const app = express();
const path = require('path');
const normalRouter = require('./normal-router');
const quantumRouter = require('./quantum-router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/normal', normalRouter);
app.use('/quantum', quantumRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
