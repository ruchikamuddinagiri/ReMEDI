// pages/quiz/[difficulty].tsx
'use client'
import { useState } from 'react';
// import { useRouter } from 'next/router';
import '../../styles/quiz.css'; // Import CSS file for styling

const QuizPage = () => {
  

  // Mock questions data
  const questions = [
    { question: 'Question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
    { question: 'Question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
    { question: 'Question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
    { question: 'Question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
    { question: 'Question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      // Redirect to result page or do something else
    }
  };

  return (
    <div className="container">
      <h1>Quiz - Hard</h1>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="option">{option}</button>
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} className="nextButton">Next Question</button>
    </div>
  );
};

export default QuizPage;
