
const express = require('express');
let cookieSession = require('cookie-session');
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

app.use(cookieSession({
    name: 'session',
    keys: ["Salah", "King"],
    maxAge: 60000
}));

app.get('/', function (req, res, next) {
    if(req.session.views == undefined || req.session.views == isNaN || req.session.views == null){
        req.session.views = 1;
    }
    else{
        req.session.views += 1;
    }
    res.end(`<h1>Cookie counter</h1>
    <p>This page was loaded ${req.session.views} time(s) in last minute`);
    next();
});

const host = "localhost";
const port = 8080;

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
