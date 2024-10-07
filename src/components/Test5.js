import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test5 = () => {
  const questions = [
    {
        "question": "What is the slenderness ratio of a 200mm wall with an RCC slab at both ends, with a length of 5m and a height of 3.8m?",
        "options": ["25", "20", "10","15"],
        "answer": "20"
    },
    {
        "question": "What is the value of a both-side fixed supported column, if it is to be equivalent to a column of fixed support at one end and free at the other end?",
        "options": ["L/2", "L/4", "L/8"],
        "answer": "L/4"
    },
    {
        "question": "What is the specific gravity of a block if its weight in air is 60N and 40N when immersed in water?",
        "options": ["3", "5", "4", "2"],
        "answer": "3"
    },
    {
        "question": "Which action is used to give the required face to a tunnel?",
        "options": ["Trimmer", "Cut holes", "A & B", "None"],
        "answer": "A & B"
    },
    {
        "question": "Traffic signals cause what?",
        "options": ["Reduce right turn conflict as well as rear-end collision", "Reduce right turn but may increase rear-end", "Increases both", "None"],
        "answer": "Reduce right turn conflict as well as rear-end collision"
    },
    {
        "question": "What is the reaction time for a normal ordinary driver?",
        "options": ["1.5 sec", "2.5 sec", "3 sec"],
        "answer": "2.5 sec"
    },
    {
        "question": "Paper is designated by which letter?",
        "options": ["A", "B", "C", "D"],
        "answer": "A"
    },
    {
        "question": "What term denotes the reduction of risk to a threshold level?",
        "options": ["Mitigation", "Acceptance", "Transfer","none"],
        "answer": "Mitigation"
    },
    {
        "question": "Which ministry possesses the DRM strategy?",
        "options": ["Ministry of Home Affairs", "Ministry of Defense", "Ministry of Finance", "None"],
        "answer": "Ministry of Home Affairs"
    },
    {
        "question": "What is the number of categories of NEA membership?",
        "options": ["3", "5", "7","4"],
        "answer": "3"
    },
    {
        "question": "Who appoints the president of NEC?",
        "options": ["The Prime Minister", "The Parliament", "The President", "None"],
        "answer": "The Prime Minister"
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

export default Test5;
