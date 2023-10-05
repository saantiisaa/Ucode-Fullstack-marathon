const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const path = require('path');

const app = express();
const host = "localhost";
const port = 8080;

app.use(
    session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let savedData = null;

app.post('/save-session', (req, res) => {
    const { password, salt } = req.body;

    // Hash the password with salt
    const hashedPassword = crypto
        .createHash('sha256')
        .update(password + salt)
        .digest('hex');

    savedData = { hashedPassword, salt };
    req.session.saved = true;

    res.json({ saved: true, hashedPassword });
});

app.get('/check-session', (req, res) => {
    if (req.session.saved) {
        res.json({ saved: true, hashedPassword: savedData.hashedPassword });
    } else {
        res.json({ saved: false });
    }
});

app.get('/check-password', (req, res) => {
    const guess = req.query.guess;

    if (savedData && guess) {
        const hashedGuess = crypto
            .createHash('sha256')
            .update(guess + savedData.salt)
            .digest('hex');

        if (hashedGuess === savedData.hashedPassword) {
            req.session.destroy(() => {
                res.json({ correct: true });
            });
            return;
        }
    }

    res.json({ correct: false });
});

app.post('/clear-session', (req, res) => {
    req.session.destroy(() => {
        res.sendStatus(200);
    });
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
