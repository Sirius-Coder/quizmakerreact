var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
var morgan = require('morgan');
var cors = require("cors");
var bodyParser = require('body-parser')
var model = require('./models/database');
require("dotenv").config()
    //Serving our Static Files to the Server
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'src')))
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    //Modifying our controller
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/back', (req, res) => {
    res.send(quizTitle)
})
var quizTitle = 'Default';
app.post('/back', (req, res) => {
    console.log(req.body.title);

    quizTitle = req.body.title;
})
app.post('/model', (req, res) => {
        console.log(typeof req.body);

        //Saving our Data to our model in the database
        var User = new model({
            Question: req.body.question,
            quest: req.body.choice
        })
        User.save((e) => {
            if (e) console.log(e)
            console.log('User Created');
        })
    })
    // Listening to Our Port
app.listen(PORT, () => {
    console.log(`Connected to Server on Port ${PORT}`);

})