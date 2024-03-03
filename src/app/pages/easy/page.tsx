
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import "../../styles/quiz.css"

const QuizPage = () => {

  const router = useRouter();

  const questions = [
    {
      question: 'What lights up our night sky?',
      options: ['The Sun','The Stars','The Moon','The Planets'],
      correctAnswer: 2, // Index of the correct answer in the options array
    },
    {
      question: 'Question 2: Why can we see the Moon?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
    },
    {
      question: 'Question 3: What does the Moon do?',
      options: ['It stays still','It goes around the Sun','It goes around the Earth','It shines during the day'],
      correctAnswer: 2,
    },
    {
      question: 'Question 4: How does the Moon sometimes look to us?',
      options: ['Always round','Always half','Like part of it is missing','The same every night'],
      correctAnswer: 2,
    },
    {
      question: 'Question 5: Does the Moon make its own light?',
      options: ['Yes, like the Sun', 'No, it reflects the Suns light', 'Yes, but only at night.', 'No, it is always dark.'],
      correctAnswer: 1,
    }
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (selectedOptionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedOptionIndex;
    setUserAnswers(newAnswers);

    
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (userAnswers[currentQuestion] === correctAnswer) {
      setScore(score + 1); // Increase score for correct answer
    } else {
      if(score>=1)
      setScore(score - 1); // Deduct score for wrong answer
      else
        setScore(0);
    }
    if(currentQuestion==4){
      setCurrentQuestion(currentQuestion)
      
    }
    else
    setCurrentQuestion(currentQuestion + 1); // Move to the next question
  };

  console.log('User Answers:', userAnswers); // Log user's selections to console

  return (
    <div className="container">
      <h1>Test Your Self</h1>
      <div className="question">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className={`option ${userAnswers[currentQuestion] === index ? 'clicked' : ''}`} onClick={() => handleAnswerSelection(index)}>{option}</button>
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} className="nextButton">Next Question</button>
      {currentQuestion === 4 && (
        <Link href="/pages">
        </Link>
      )}
      <Link className="button" href="/pages"> Levels </Link>
      
      <h1>Score: {score}</h1>
      {/* <button onClick={handleNextQuestion} className="nextButton">{currentQuestion < questions.length - 1 ? 'Next Question' : 'Try Again'}</button> */}
      
    </div>
  );
};

export default QuizPage;

