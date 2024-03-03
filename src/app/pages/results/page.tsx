'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../../styles/results.css'; // Import CSS file for styling

const ResultsPage = () => {
  const router = useRouter();
  

  // Mock questions data
  const questions = [
    { question: 'Question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 0 },
    { question: 'Question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 1 },
    { question: 'Question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 2 },
    { question: 'Question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 3 },
    { question: 'Question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 0 },
  ];

  // Convert userAnswers string to array
//   const parsedUserAnswers = userAnswers ? JSON.parse(userAnswers as string) : [];

  // Calculate score
  let score = 0;
//   questions.forEach((question, index) => {
//     if (parsedUserAnswers[index] === question.correctAnswer) {
//       score++;
//     }
//   });

  return (
    <div className="container">
      <h1>Quiz Results</h1>
      <div className="results">
        <h2>Score: {score}/{questions.length}</h2>
        <div className="answers">
          {questions.map((question, index) => (
            <div key={index} className="answer">
              <p><strong>Question {index + 1}:</strong> {question.question}</p>
              <p><strong>Your Answer:</strong> {0}</p>
              <p><strong>Correct Answer:</strong> {question.options[question.correctAnswer]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;