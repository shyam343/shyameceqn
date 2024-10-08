import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test1 = () => {
  const questions = [
    {
      "question": "CMOS gates are commercially available as which of the following series?",
      "options": ["1000", "2000", "3000", "4000"],
      "answer": "4000"
    },
    {
      "question": "What is the recommended level of illumination for an office room?",
      "options": ["100", "200", "300", "600"],
      "answer": "200"
    },
    {
      "question": "A differentiator is usually not a part of a control system because it?",
      "options": ["Reduces damping", "Reduces the gain margin", "Increases input noise", "Increases error"],
      "answer": "Increases input noise"
    },
    {
      "question": "Which compensation is used to reduce the power loss in radial distribution?",
      "options": ["Series capacitor compensation", "Shunt capacitor compensation", "Phase angle compensation", "Series inductor compensation"],
      "answer": "Shunt capacitor compensation"
    },
    {
      "question": "Which layer of the OSI model is responsible for authorization and authentication?",
      "options": ["Data link layer", "Session layer", "Application layer", "Presentation layer"],
      "answer": "Session layer"
    },
    {
      "question": "Which of the following operations cannot be performed on pointers in C?",
      "options": ["Addition", "Subtraction", "Multiplication", "Comparison"],
      "answer": "Addition"
    },
    {
      "question": "According to NEC, what is the wire conductor size requirement for lighting and power sockets?",
      "options": ["1.5 sq mm and 4 sq. mm", "2.4 sq. mm and 6 sq.mm", "1.5 sq.mm and 6 sq.mm", "2.4 sq.mm and 4 sq.mm"],
      "answer": "1.5 sq mm and 4 sq. mm"
    },
    {
      "question": "How many minimum basic function blocks are required for a communication system?",
      "options": ["2", "5", "3", "7"],
      "answer": "3"
    },
    {
      "question": "What is the maximum number of dimensions an array in C may have?",
      "options": ["2", "8", "3", "No limit"],
      "answer": "No limit"
    },
    {
      "question": "The bus is available when the DMA controller receives the signal?",
      "options": ["HRQ", "HLDA", "DACK", "All of the mentioned"],
      "answer": "HLDA"
    },
    {
      "question": "How many segment registers are there in 8086?",
      "options": ["5", "4", "8", "16"],
      "answer": "4"
    },
    {
      "question": "In a parallel circuit, which parameter remains the same?",
      "options": ["Voltage", "Current", "Power", "Frequency"],
      "answer": "Voltage"
    },
    {
      "question": "Which parameter consumes power?",
      "options": ["Capacitance", "Inductance", "Resistance", "Both a and b"],
      "answer": "Resistance"
    },
    {
      "question": "The forward characteristics of a diode are 50mV/µA. What is the forward resistance?",
      "options": ["50", "35", "37", "25"],
      "answer": "25"
    },
    {
      "question": "Which oscillator is based on the piezoelectric effect?",
      "options": ["LC oscillator", "Crystal oscillator", "a & b", "None"],
      "answer": "Crystal oscillator"
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
