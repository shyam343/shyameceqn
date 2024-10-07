import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test2 = () => {
  const questions = [
    {
      "question": "What is the maximum length of reinforcement to be taken for an RCC column?",
      "options": ["12m", "10m", "15m", "11m"],
      "answer": "12m"
    },
    {
      "question": "What is the name of the slab that is continuously supported in two directions but carries load in only one direction?",
      "options": ["One-way slab", "Two-way slab", "A & B", "None"],
      "answer": "One-way slab"
    },
    {
      "question": "What should not be placed in the intake?",
      "options": ["Navigation channel"],
      "answer": "Navigation channel"
    },
    {
      "question": "At which DO (Dissolved Oxygen) value does aquatic life not survive?",
      "options": ["(DO values to be provided)"],
      "answer": "(DO answer to be provided)"
    },
    {
      "question": "Which method is applied for a rapidly growing population?",
      "options": ["(Method options to be provided)"],
      "answer": "(Method answer to be provided)"
    },

    {
      "question": "Which shape is good for a surface drain?",
      "options": ["Trapezoidal", "Circle", "Parabolic", "Triangular"],
      "answer": "Trapezoidal"
  },
  {
      "question": "In modern day, which type of gate in hydraulic structures is mostly used?",
      "options": ["Sliding", "Roller", "Radial (Fixed wheel)", "Flap"],
      "answer": "Radial (Fixed wheel)"
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

export default Test2;
