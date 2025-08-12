import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);

  useEffect(() => {
    const storedScore = localStorage.getItem("examScore");
    if (!storedScore) {
      navigate("/");
      return;
    }
    setScore(storedScore);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow text-center">
      <h1 className="text-3xl font-bold mb-6">Exam Completed!</h1>
      <p className="text-xl mb-4">Your score: <strong>{score}</strong></p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        Go to Home
      </button>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default ResultPage;
