import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionText: {type: String, required: true},
    options: [{type: String, required: true}],
    correctAnswer: {type: String, required: true},
});

const Questions = mongoose.model("Questions", questionSchema);
export default Questions;