
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
      question: 'What causes water to evaporate?',
      options: ['The Moon gravity','Wind','The Sun heat', 'Cold temperatures'],
      correctAnswer: 2, // Index of the correct answer in the options array
    },
    {
      question: 'Question 2: What happens to water vapor when it cools down?',
      options: ['It turns into ice', 'It forms clouds', 'It falls as rain immediately.', 'It returns to the ocean'],
      correctAnswer: 1,
    },
    {
      question: 'Question 3: What is precipitation?',
      options: ['Water evaporating','Water in the form of rain or snow falling to the ground','The formation of clouds','The Sun heating the water'],
      correctAnswer: 1,
    },
    {
      question: 'Question 4: Why is the water cycle important?',
      options: ['It keeps the ocean levels the same','It provides fresh water for all living things.','It helps to cool down the Earth','It increases the salt content in the ocean.'],
      correctAnswer: 1,
    },
    {
      question: 'Question 5: How does the water cycle start?',
      options: ['With precipitation', 'With condensation', 'With evaporation', 'With water collection in oceans'],
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

