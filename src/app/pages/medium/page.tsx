// pages/quiz/[difficulty].tsx
'use client'
// pages/quiz/[difficulty].tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/quiz.css'; // Import CSS file for styling

const QuizPage = () => {
  const router = useRouter();

  // Mock questions data
  const questions = [
    { question: 'Question 1?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 0 },
    { question: 'Question 2?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 1 },
    { question: 'Question 3?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 2 },
    { question: 'Question 4?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 3 },
    { question: 'Question 5?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 0 },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelection = (selectedOptionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedOptionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      // Redirect to result page or display result
      router.push(`/quiz/results`);
    }
  };

  return (
    <div className="container">
      <h1>Quiz - Medium</h1>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="option" onClick={() => handleAnswerSelection(index)}>{option}</button>
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} className="nextButton">Next Question</button>
    </div>
  );
};

export default QuizPage;