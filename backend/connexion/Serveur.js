const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SondageModel = require('./db')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/sondage");

app.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    SondageModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json('Connexion réussie')
            }else {
                res.json('Le mot de est incorrect')
            }
        }else {
            res.json('Cet utilisateur n\'existe pas')
        }
    })
})


app.listen(3000, () => {
    console.log("Serveur à l'écoute!!!!!")
})