import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

const seedQuestions = async () => {
  try {
    await Question.deleteMany();

    const questions = [
      {
        questionText: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        questionText: "Which programming language is known as the backbone of web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: "JavaScript"
      },
      {
        questionText: "What is 15 + 27?",
        options: ["32", "42", "52", "39"],
        correctAnswer: "42"
      },
      {
        questionText: "Which company developed React?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        correctAnswer: "Facebook"
      },
      {
        questionText: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language"
        ],
        correctAnswer: "HyperText Markup Language"
      },
      {
        questionText: "Which is the largest planet in our Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Mars"],
        correctAnswer: "Jupiter"
      },
      {
        questionText: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)"
      },
      {
        questionText: "In CSS, which property is used to change text color?",
        options: ["font-color", "color", "text-color", "background-color"],
        correctAnswer: "color"
      },
      {
        questionText: "Which data structure uses FIFO order?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correctAnswer: "Queue"
      },
      {
        questionText: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: "const"
      },
      {
        questionText: "Which tag is used for inserting a line break in HTML?",
        options: ["<lb>", "<break>", "<br>", "<newline>"],
        correctAnswer: "<br>"
      },
      {
        questionText: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
      },
      {
        questionText: "Which of these is a JavaScript framework?",
        options: ["Laravel", "React", "Django", "Spring"],
        correctAnswer: "React"
      },
      {
        questionText: "Which HTML tag is used to display images?",
        options: ["<picture>", "<img>", "<src>", "<image>"],
        correctAnswer: "<img>"
      },
      {
        questionText: "Which SQL command is used to fetch data from a database?",
        options: ["GET", "SELECT", "FETCH", "SHOW"],
        correctAnswer: "SELECT"
      },
      {
        questionText: "What is the full form of API?",
        options: [
          "Application Programming Interface",
          "Application Program Internet",
          "Advanced Programming Integration",
          "Applied Program Interface"
        ],
        correctAnswer: "Application Programming Interface"
      },
      {
        questionText: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
      },
      {
        questionText: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C"
      },
      {
        questionText: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
        correctAnswer: "Bill Gates"
      },
      {
        questionText: "Which year was JavaScript created?",
        options: ["1995", "1990", "2000", "1998"],
        correctAnswer: "1995"
      },
      {
        questionText: "Which protocol is used to send emails?",
        options: ["SMTP", "HTTP", "FTP", "SNMP"],
        correctAnswer: "SMTP"
      },
    ];

    await Question.insertMany(questions);
    console.log("✅ 20+ Questions Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedQuestions();
