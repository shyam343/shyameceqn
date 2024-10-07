import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test1 = () => {
  const questions = [
    {
      "question": "What does purlin help to avoid in a rafter?",
      "options": ["Bending Moment (BM)", "Shear Force (SF)", "Deflection", "Bending Moment and Shear Force (BM and SF)"],
      "answer": "Bending Moment and Shear Force (BM and SF)"
    },
    {
      "question": "Which method is the best way to stabilize sandy soil?",
      "options": ["Cement", "Lime", "Mechanical", "Soil"],
      "answer": "Cement"
    },
    {
      "question": "What is the rate of stretching bitumen in a ductility test?",
      "options": ["50mm", "20mm", "30mm", "40mm"],
      "answer": "50mm"
    },
    {
      "question": "What is the centroid of a cone?",
      "options": ["h/1", "h/2", "h/3", "h/4"],
      "answer": "h/4"
    },
    {
      "question": "What does the line drawn from the pole to the circumference in Mohr's Circle represent?",
      "options": ["Major principal plane", "Minor principal plane", "Plane inclined at the same angle to the principal plane", "None"],
      "answer": "Plane inclined at the same angle to the principal plane"
    },
    {
      "question": "Which material has the lowest safe exit gradient using Khosla's theory?",
      "options": ["Fine sand", "Gravel", "Shigel", "Clay"],
      "answer": "Fine sand"
  },
  {
      "question": "Uplifting pressure is important for the stability of which dam?",
      "options": ["Earthen dam", "Concrete dam", "Cofferdam", "Buttress dam"],
      "answer": "Concrete dam"
  },
    
    {
      "question": "What nominal mix of concrete is required for roofing of RCC?",
      "options": ["M15", "M20", "M10", "M5"],
      "answer": "M20"
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
    }, 500); // Add a small delay to allow feedback before moving to the next question
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

export default Test1;
