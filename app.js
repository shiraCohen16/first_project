const express = require('express'); // מטפלת ומגשרת בין בקשות הhttp לשרת
const path = require('path');
const app = express();
const bodyParser = require('body-parser');  //  מממיר בקשות שנמצאות בגוף הבקשת html 
const mongoose = require('mongoose');

const uri = "mongodb+srv://shiraco2017:yaron123@cluster0.k94mpre.mongodb.net/School"

mongoose.connect(uri).then(()=>{console.log("mongo db connected")});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //  parse request body
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
    
});
app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));

});
app.post('/register', (req, res) => { 
    const username = req.body.UserName; 
    const email = req.body.Email; 
    const password = req.body.Password; 
    console.log(`Received registration data - Username: ${username}, Email: ${email}, Password: ${password}`);
    res.send('Registration successful!');
});



module.exports = app;