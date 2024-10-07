import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test3 = () => {
  const questions = [
    {
      "question": "According to Rankine theory, what is the minimum depth of foundation given a bearing stress of 180kN/m³, unit weight of 20kN/m³, and an internal angle of friction of 30 degrees?",
      "options": ["9m", "1m", "0.5m", "0.75m"],
      "answer": "0.75m"
    },
    {
      "question": "If atmospheric pressure is 740mm of Hg and suction pressure is 10kPa, what is the absolute pressure?",
      "options": ["88.3kPa", "89.3kPa", "87.3kPa", "86.3kPa"],
      "answer": "88.3kPa"
    },
    {
      "question": "What is the portion of the span where plastic hinges form for a concentrated load at the mid-span of a simply supported beam?",
      "options": ["L/2", "L/3", "L/4", "L"],
      "answer": "L/2"
    },
    {
      "question": "If there are 2 or more columns in a foundation, what is the name of the foundation?",
      "options": ["Combined", "Raft", "Both A & B", "Only B"],
      "answer": "Combined"
    },
    {
      "question": "If enough water for workability of concrete is already added, then increasing the water-cement ratio in the concrete results in?",
      "options": ["Decreased strength and increased porosity in the concrete", "Increased strength and increased porosity in the concrete", "Decreased strength and decreased porosity in the concrete", "None"],
      "answer": "Decreased strength and increased porosity in the concrete"
    },
    {
      "question": "Coincidence factor is the reciprocal of?",
      "options": ["Diversity factor", "Total demand", "Load factor", "Plant factor"],
      "answer": "Diversity factor"
  },
  {
      "question": "Power of a centrifugal pump is proportional to the diameter of the wheel by what relation?",
      "options": ["D^2", "D^3", "D^4", "D"],
      "answer": "D^2"
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: option
    });

    // Automatically go to the next question after selecting an option
    setTimeout(() => {
      handleNext();
    }, 500); // Set a small delay to allow feedback before moving to the next question
  };

  if (showResult) {
    return (
      <div className="result-container">
        <h2>Final Results</h2>
        {questions.map((question, index) => (
          <div key={index} className="result-question">
            <h3>{question.question}</h3>
            <p
              className={
                selectedOptions[index] === question.answer
                  ? "correct"
                  : "incorrect"
              }
            >
              Your answer: {selectedOptions[index]}
            </p>
            <p className="correct-answer">Correct answer: {question.answer}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="test-container">
      <div className="quiz-content">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option-box ${
                selectedOptions[currentQuestion] === option
                  ? option === questions[currentQuestion].answer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test3;
