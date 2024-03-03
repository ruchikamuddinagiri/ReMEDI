
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
      question: "What is the first stage of a butterfly's life?",
      options: ['Pupa','Egg','Butterfly','Caterpillar'],
      correctAnswer: 1, // Index of the correct answer in the options array
    },
    {
      question: 'Question 2: What does a caterpillar do after hatching from the egg?',
      options: ['It flies away', 'It starts making a chrysalis', 'It eats a lot of leaves.', 'It turns into a butterfly.'],
      correctAnswer: 2,
    },
    {
      question: 'Question 3: What is the process of changing from a pupa to a butterfly called?',
      options: ['Growth','Hatching','Metamorphosis','Transformation'],
      correctAnswer: 2,
    },
    {
      question: 'Question 4: Where does the caterpillar turn into a pupa?',
      options: ['On a leaf','Inside a chrysalis','In the air','Under the ground'],
      correctAnswer: 1,
    },
    {
      question: "Question 5: How many stages are there in a butterfly's life cycle?",
      options: ['Two', 'Three', 'Four.', 'Five'],
      correctAnswer: 2,
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

