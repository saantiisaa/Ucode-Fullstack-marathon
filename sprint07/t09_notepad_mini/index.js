const express = require('express')
let bodyParser = require('body-parser')
const session = require('express-session')

let sess
let app = express()

const port = 8080;
const host = 'localhost'

app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
)

let urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/save', urlencodedParser, function (req, res) {
    let response = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        about: req.body.about,
        photo: req.body.photo
    };
    sess = req.session

    sess.copy = response

    console.log(sess.copy);
    res.end(JSON.stringify(sess.copy));
})

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
