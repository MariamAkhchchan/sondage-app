const mongoose = require('mongoose')
const SondageShema = new mongoose.Schema({
    email : String,
    password : String
})

const SondageModel = mongoose.model("administrateurs", SondageShema)
module.exports = SondageModel