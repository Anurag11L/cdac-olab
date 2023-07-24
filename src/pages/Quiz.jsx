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
    // image:'src/components/spiral.png'

  },
  {
    question: ' What is the length of OC ? ',
    options: ['√7', '√2','√4','√5'],
    answer: '√4',
    explanation: ' The length of OC is √4.',
    image:'src/components/spiralQ.jpg'
  },
  {
    question: 'Can we use Square Root Spiral to calculate root of 4.35 ?',
    options: ['Yes', 'No'],
    answer: 'No',
    explanation: 'Square Root Spiral provides root of only positive numbers.',
    // image:'src/components/spiral.png'

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
    
    <div className="quiz" style={{padding:'2rem',border:'4px solid darkblue',borderRadius:'2rem'}}>
    <h1 style={{width:'100%'}}>QUIZ</h1>
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

              <div className="question-text">{question.question}
              {question.image && <img src={question.image} alt="Question" style={{ border:'2px solid black',width:'40vw' }} />}</div>

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
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
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
