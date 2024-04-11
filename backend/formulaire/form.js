const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SondageModel = require('./db')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/sondage");

app.post('/', (req, res) => {
    const {content, question} = req.body;
        const NewQuestion = new SondageModel({
            titre:"",
            description:"",
            section
    });
    NewQuestion.save()
    .then(qt => res.status(201).json(qt))
    .catch(error => res.status(402).json(error)); 
    });



app.listen(3000, () => {
    console.log("Serveur à l'écoute!!!!!")
})