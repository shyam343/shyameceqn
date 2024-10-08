import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test5 = () => {
  const questions = [
    {
      "question": "What method of depreciation is used for tax purposes?",
      "options": ["Double declining", "SOYD", "MACRS", "Straight line"],
      "answer": "MACRS"
    },
    {
      "question": "According to the Nyquist stability criterion, where should the position of all zeros of q(s) correspond to in the s-plane?",
      "options": ["On left half", "At the center", "On right half", "Random"],
      "answer": "On left half"
    },
    {
      "question": "The feedback of an ideal operational amplifier is connected to?",
      "options": ["Inverting input", "Non-inverting input", "Offset null", "Not connected anywhere"],
      "answer": "Inverting input"
    },
    {
      "question": "The ratio of voltage transform at the first port to the voltage transform at the second port is called?",
      "options": ["Voltage transfer ratio", "Current transfer ratio", "Transfer impedance", "Transfer admittance"],
      "answer": "Voltage transfer ratio"
    },
    {
      "question": "Z-parameters are also known as?",
      "options": ["Open-circuit impedance", "Open-circuit admittance", "Short circuit admittance", "Short circuit impedance"],
      "answer": "Open-circuit impedance"
    },
    {
      "question": "What is the minimum number of NAND gates required to get the function of an OR gate?",
      "options": ["1", "2", "3", "4"],
      "answer": "2"
    },
    {
      "question": "The advantage of negative feedback in a system?",
      "options": ["Decreases distortion", "Decreases the stability", "Decreases the input impedance", "Decreases the output impedance"],
      "answer": "Decreases distortion"
    },
    {
      "question": "What is the bandwidth of a frequency-modulated wave, if the frequency deviation allowed is 50 kHz and the modulating signal has a frequency of 1 kHz?",
      "options": ["51", "102", "100", "154"],
      "answer": "102"
    },
    {
      "question": "If the modulation index is greater than 1?",
      "options": ["The baseband signal is not preserved in the envelope of the AM signal", "The recovered signal is distorted", "It is called over modulation", "All of the above"],
      "answer": "All of the above"
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

export default Test5;
