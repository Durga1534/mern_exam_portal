import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExamPage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  const timerRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/questions", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setQuestions(res.data || []);
      } catch (error) {
        alert("Failed to load questions.");
        navigate("/");
      }
    };

    fetchQuestions();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [navigate]);

  const handleAnswerSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async () => {
    clearInterval(timerRef.current);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/questions/submit",
        { answers },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      localStorage.setItem("examScore", res.data.score);
      localStorage.removeItem("examStarted");

      navigate("/result");
    } catch (error) {
      alert("Failed to submit exam. Try again.");
    }
  };

  if (!questions.length) return <p>Loading questions...</p>;

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentQuestion._id] || "";

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Question {currentIndex + 1} of {questions.length}
        </h2>
        <div className="text-lg font-mono">{formatTime(timeLeft)}</div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">{currentQuestion.questionText}</h3>
        <div className="space-y-2">
          {currentQuestion.options.map((opt, idx) => (
            <label
              key={idx}
              className={`block p-2 border rounded cursor-pointer ${
                selectedAnswer === opt ? "bg-blue-200 border-blue-600" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name={`question_${currentQuestion._id}`}
                value={opt}
                checked={selectedAnswer === opt}
                onChange={() => handleAnswerSelect(currentQuestion._id, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded ${
            currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          Previous
        </button>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
