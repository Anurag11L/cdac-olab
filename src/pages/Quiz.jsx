import React, { useState } from 'react';
// import '../components/Quiz.css'

const questions = [
  {
    question: 'Every irrational number is a real number?',
    options: ['True', 'False'],
    answer: 'True',
    explanation: 'Rational Numbers are numbers which are in the form of p/q; Irrational Numbers are numbers which cannot be in the form of p/q; Real numbers are numbers which can be plotted on number line;  Thus, as all irrational numbers can be plotted on number line and all numbers on number line are real numbers. So, True.'
  },
  {
    question: 'Every point on the number line is of the form √m, where m is a natural number.',
    options: ['True', 'False'],
    answer: 'False',
    explanation: 'A number line contains both positive and negative numbers. Since, square root of negative number is not a real number, and negative numbers cannot be expressed as the square root of a natural number(m), not every point on the number line can be represented in the form √m where m is a natural number.',
    // image:'E:\cdac final project\quiz\quizz\src\diagram1.png'

  },
  // Add more questions...
];

function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) {
        score++;
      }
    }
    return score;
  };

  return (
    <>
    <div className="quiz">
      {showScore ? 
      (
        <div className="score-section">
          You scored {calculateScore()} out of {questions.length}
        </div>
      ) : 
      (
        <>
          {questions.map((question, index) => (
            <div className="question-section" key={index}>
              <div className="question-count">
                <span>Question {index + 1}</span>/{questions.length}
              </div>

              <div className="question-text">{question.question}</div>

              <div className="answer-section">
                {question.options.map((option) => (
                  <button key={option} onClick={() => handleAnswerOptionClick(index, option)} className={answers[index] === option ? 'selected' : ''} disabled={answers[index] !== ''}>
                    {option}
                  </button>
                ))}
              </div>

              {answers[index] !== '' && (
                <div className="explanation">
                  <div className="correct-answer">Correct answer: {question.answer}</div>
                  <div className="explanation-text">Explanation: {question.explanation}</div>
                  {question.image && (
                    <div className="explanation-image">
                      <img src={question.image} alt="Explanation" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button> */}
          <br></br>
          <div className="score-section">
          You scored {calculateScore()} out of {questions.length}
        </div>
        <br></br>
        </>
      )}
      
    </div>
    <br></br>
    <br></br>
    </>
  );
}

export default Quiz;
