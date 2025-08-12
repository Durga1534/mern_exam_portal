import Questions from "../models/Question.js";

export const addQuestion = async (req, res) => {
    try {
        const {questionText, options, correctAnswer} = req.body;
        const question = new Questions({questionText, options, correctAnswer});
        await question.save();
        res.status(201).json({message:"Question added successfully", question})
    }catch(err) {
        console.error("Error adding question:", err);
        res.status(500).json({message: "Server error"});
    }
}

export const getQuestions = async (req, res) => {
    try {
        const questions = await Questions.find();
        res.status(200).json(questions);
    }catch(err) {
        console.error("Error fetching questions:", err);
        res.status(500).json({message: "Server error"});
    }
}

export const submitExam = async (req, res) => {
  try {
    const { answers } = req.body;
    const questions = await Questions.find();

    let score = 0;
    questions.forEach((q) => {
      if (answers[q._id] && answers[q._id] === q.correctAnswer) {
        score++;
      }
    });

    res.status(200).json({ score });
  } catch (err) {
    console.error("Error submitting exam:", err);
    res.status(500).json({ message: "Server error" });
  }
}  