import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test3 = () => {
  const questions = [
    {
      "question": "Choose the correct statement about the C language break; statement.",
      "options": [
        "A single break; statement can force execution control to come out of only one loop.",
        "A single break; statement can force execution control to come out of a maximum of two nested loops.",
        "A single break; statement can force execution control to come out of a maximum of three nested loops.",
        "None of the above."
      ],
      "answer": "A single break; statement can force execution control to come out of only one loop."
    },
    {
      "question": "What is an inline function?",
      "options": [
        "A function that is expanded at each call during execution.",
        "A function that is called during compile time.",
        "A function that is not checked for syntax errors.",
        "A function that is not checked for semantic analysis."
      ],
      "answer": "A function that is expanded at each call during execution."
    },
    {
      "question": "In an overhead transmission line, conductor current concentration occurs on the surface of the conductor due to?",
      "options": [
        "High current flowing.",
        "Low current flowing.",
        "Both a and b.",
        "None of the above."
      ],
      "answer": "High current flowing."
    },
    {
      "question": "Why is function definition required in C?",
      "options": [
        "Functions are used to perform certain actions, and they are important for reusing code.",
        "None"
      ],
      "answer": "Functions are used to perform certain actions, and they are important for reusing code."
    },
    {
      "question": "In TDM (Time Division Multiplexing), the bandwidth of the input source signal is __________ the transmitted composite signal.",
      "options": [
        "Greater than",
        "Equal to",
        "Less than"
      ],
      "answer": "Equal to"
    },
    {
      "question": "In which mode of the 8255 PPI is handshaking carried out?",
      "options": [
        "Mode 0",
        "Mode 1",
        "Mode 2",
        "Mode 3"
      ],
      "answer": "Mode 1"
    },
    {
      "question": "In a transformer, the core is made of soft iron to reduce?",
      "options": [
        "Eddy current loss.",
        "Hysteresis loss.",
        "Force opposing electric current.",
        "None of the above."
      ],
      "answer": "Hysteresis loss."
    },
    {
      "question": "What happens to the speed of a synchronous motor if the load is halved?",
      "options": [
        "Remains the same.",
        "Increases.",
        "Decreases.",
        "Halves the speed."
      ],
      "answer": "Remains the same."
    },
    {
      "question": "Dummy strain gauges are used for?",
      "options": [
        "Calibration.",
        "Compensation for temperature variation.",
        "Increase bridge sensitivity.",
        "None of the above."
      ],
      "answer": "Compensation for temperature variation."
    },
    {
      "question": "Which is not associated with the dynamic characteristics of measurement?",
      "options": ["Measuring lag", "Fidelity", "Speed of response", "Accuracy"],
      "answer": "Accuracy"
    },
    {
      "question": "Find the Z-transform of δ(n + 3).",
      "options": ["z", "z2", "1", "z3"],
      "answer": "z3"
    },
    {
      "question": "The Superposition Theorem is not applicable for ___",
      "options": ["Power calculation", "Voltage calculation", "Current Calculation", "Both Voltage and Current calculation"],
      "answer": "Power calculation"
    },
    {
      "question": "When the pointer of an indicating instrument is in motion, then the deflecting torque is opposed by:",
      "options": ["Damping torque", "Controlling torque", "Both damping torque and controlling torque", "Rotating torque"],
      "answer": "Both damping torque and controlling torque"
    },
    {
      "question": "Which of the following connection is best suited for 3 phase 4 wire service?",
      "options": ["ΔΔ", "YY", "ΔY", "YΔ"],
      "answer": "YY"
    },
    {
      "question": "When the number of poles is equal to the number of zeros, how many branches of root locus tend towards infinity?",
      "options": ["1", "2", "0", "Equal to the number of zeros"],
      "answer": "0"
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
