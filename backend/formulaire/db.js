const mongoose = require('mongoose')
const SondageShema = new mongoose.Schema({
    
})

const SondageModel = mongoose.model("forms", SondageShema)
module.exports = SondageModel