import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test4 = () => {
  const questions = [
    {
      "question": "What is the filtration rate for a rapid sand filter?",
      "options": ["1,000 to 2,000lph ","4,000 to 6,000lph","2,000 to 3,000lph ","8,000 to 10,000lph" ],
      "answer": "4,000 to 6,000lph"
    },
    {
      "question": "What is the sieve size in mm for an aggregate to be considered fine-grained, retaining on it?",
      "options": ["0.15mm", "0.3mm", "4.75mm", "10mm"],
      "answer": "4.75mm"
    },
    {
      "question": "What is the name of the sewer that carries sewage from multiple main sewers?",
      "options": ["Intercepting", "Combined", "A & B", "None"],
      "answer": "Intercepting"
    },
    {
      "question": "If 40ml of wastewater is diluted to 240ml of mixture, what is the TON (Threshold Odor Number) value?",
      "options": ["5", "6", "7", "8"],
      "answer": "7"
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

export default Test4;
