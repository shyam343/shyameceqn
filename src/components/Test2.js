import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test2 = () => {
  const questions = [
    {
      "question": "Which of the following pencil leads is the hardest?",
      "options": ["HB", "H", "B", "F"],
      "answer": "H"
    },
    {
      "question": "Convert this binary data into decimal: (1011.1011)₂",
      "options": ["11.6875", "11.567", "10.6875", "10.3578"],
      "answer": "11.6875"
    },
    {
      "question": "Master-slave flip-flop is also referred to as?",
      "options": ["Level triggered flip-flop", "Pulse triggered flip-flop", "Edge triggered flip-flop", "Edge-Level triggered flip-flop"],
      "answer": "Pulse triggered flip-flop"
    },
    {
      "question": "Total number of professional engineers registered in NEC?",
      "options": ["31", "41", "51", "61"],
      "answer": "61"
    },
    {
      "question": "NEC (Nepal Engineering Council) must submit their annual report every year to?",
      "options": ["Chairman", "Prime Minister", "Nepal government", "Government sub-secretary"],
      "answer": "Prime Minister"
    },
    {
      "question": "Tenure of the President of NEA?",
      "options": ["4 years", "2 years", "3 years", "1 year"],
      "answer": "4 years"
    },
    {
      "question": "Fourier Transform of Aδ(t) is?",
      "options": ["1", "A^2", "A", "0"],
      "answer": "1"
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
