//Setting Up The DataBase
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('open', () => {
    console.log('The Database connection has been established')
})
db.on('error', (err) => console.error(err))

//Defining Our Schema 
var quizSchema = new mongoose.Schema({

    Question: [],
    quest: [{}]
})

//Our Model 
var Model = mongoose.model('Model', quizSchema);
module.exports = Model;