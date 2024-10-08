import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test4 = () => {
  const questions = [
    {
      "question": "If a technician measures voltages across terminals as 10.5, 10.15, 10.05, 10.10, and 10.00, what will be the range error?",
      "options": ["±0.01", "±0.1", "±0.025", "±0.05"],
      "answer": "±0.01"
    },
    {
      "question": "The transfer function of a system is the Laplace transform of its __ under the assumption of zero initial conditions.",
      "options": ["Square-wave response", "Ramp response", "Step response", "Impulse response"],
      "answer": "Step response"
    },
    {
      "question": "The rate of a block code is the ratio of?",
      "options": ["Block length to message length", "Message length to block length", "Message weight to block length", "None of the mentioned"],
      "answer": "Message length to block length"
    },
    {
      "question": "In TTL, which logic gate is normally used?",
      "options": ["NAND", "NOR", "OR", "AND"],
      "answer": "NAND"
    },
    {
      "question": "The major advantage of FM over AM is?",
      "options": ["Reception is less noisy", "Higher carrier frequency", "Smaller bandwidth", "Small frequency deviation"],
      "answer": "Reception is less noisy"
    },
    {
      "question": "Which stage occurs between the passband and stopband of a low-pass filter?",
      "options": ["Transition band", "Attention band","A & B", "none"],
      "answer": "Transition band"
    },
    {
      "question": "The gain of a first-order low-pass filter?",
      "options": ["Increases at the rate of 20dB/decade", "Increases at the rate of 40dB/decade", "Decreases at the rate of 20dB/decade", "Decreases at the rate of 40dB/decade"],
      "answer": "Decreases at the rate of 20dB/decade"
    },
    {
      "question": "The transfer function f(z) tending to infinity represents?",
      "options": ["Pole", "Zero", "A & B", "None"],
      "answer": "Pole"
    },
    {
      "question": "Which rotor is used for high-speed applications?",
      "options": ["Cylindrical Rotor", "Salient pole rotor", "A and B", "None"],
      "answer": "Cylindrical Rotor"
    },
    {
      "question": "The maximum torque angle of a synchronous motor is?",
      "options": ["45°", "90°", "120°", "180°"],
      "answer": "90°"
    },
    {
      "question": "Which of the following is an analog modulation technique?",
      "options": ["PAM", "PCM", "PPM", "PWM"],
      "answer": "PWM"
    },
    {
      "question": "Which of the following statements regarding Gantt charts is TRUE?",
      "options": [
        "Gantt charts give a timeline and precedence relationships for each activity of a project.",
        "Gantt charts use the four standard spines of Methods, Materials, Manpower, and Machinery.",
        "Gantt charts are visual devices that show the duration of activities in a project.",
        "Gantt charts are expensive"
      ],
      "answer": "Gantt charts are visual devices that show the duration of activities in a project."
    },
    {
      "question": "Maximum speed of a synchronous machine for 50 Hz is -",
      "options": ["1500 rpm", "6000 rpm", "3000 rpm", "2000 rpm"],
      "answer": "3000 rpm"
    },
    {
      "question": "Which programming language is closely related to human languages?",
      "options": ["Assembly Language", "Low Level Language", "Machine Language", "High Level Language"],
      "answer": "High Level Language"
    },
    {
      "question": "_____ refers to the attributes that have a direct impact on the logical execution of the program.",
      "options": ["Computer organization", "Computer architecture", "Both a & b", "Computer Design"],
      "answer": "Computer architecture"
    },
    {
      "question": "The number of 1’s in the 8-bit unsigned representation of 127 in its 2’s complement form is m and that in 1’s complement form is n. What is the value of m : n?",
      "options": ["2 : 1", "1 : 2", "3 : 1", "1 : 3"],
      "answer": "2 : 1"
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
