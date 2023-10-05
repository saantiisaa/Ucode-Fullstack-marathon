const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({secret: '1', saveUninitialized: true, resave: true}));
app.use(express.urlencoded({extended: true}));

let currentSession;
const host = "localhost";
const port = 8080;

app.post('/login', (require, response) => {
    currentSession = require.session;
    let counterExp = 1;
    let counterPurpose = 1;
    console.log(require.body)
    for(let temp in require.body) {
        currentSession[temp] = require.body[temp];
        if(temp.includes('box_')){
            currentSession.expirience = counterExp++;
        }else{
            currentSession.expirience = counterExp - 1;
        }
        if(temp.includes('radio_')){
            currentSession.purpose = counterPurpose++;
        }else{
            currentSession.purpose = counterPurpose- 1;
        }
    }
    response.redirect("/check_info");
});

app.get('/', (require, response) => {
    currentSession = require.session;
    if(currentSession.ageHero){
        response.redirect('/check_info');
    } else {
        response.sendFile(__dirname + '/index.html');
    }

});

app.get('/forget',(require, response) => {
    require.session.destroy(() => { response.redirect('/'); });

});

app.get('/check_info', (require, response) => {
    currentSession = require.session;
    response.write(`<h1>Session for new</h1>
    <span>
    name: ${currentSession.realName}<br>
    alias:${currentSession.curAlias}<br>
    age:${currentSession.ageHero}<br>
    description:${currentSession.textAbout}<br>
    photo:${currentSession.picture}<br>
    expirience:${currentSession.expirience}<br>
    level:${currentSession.control}<br>
    purpose:${currentSession.purpose}<br><br></span>`);
    response.end('<fieldset><button><a href=/forget>FORGET</a></button></fieldset>');
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});