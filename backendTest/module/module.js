const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the questions
const questionSchema = new Schema({
    titreQuestion: String,
    typeQuestion: String,
    choix: [String], // Assuming choices are strings
    questionParagraphe: String
});

// Define the schema for the entire form
const formSchema = new Schema({
    titreForm: String,
    descriptionForm: String,
    questionsForm: [questionSchema] // Array of question objects
});

// Create a model using the form schema
const Form = mongoose.model('Form', formSchema);

module.exports = Form;
