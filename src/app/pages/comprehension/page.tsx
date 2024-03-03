// pages/timer.tsx
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '../../components/model'; // Assuming you have a Modal component
import "../../styles/comp.css"

const TimerPage = () => {
  const router = useRouter();
  const [secondsElapsed, setSecondsElapsed] = useState(5);
  const [showModal, setShowModal] = useState(false);

  // Start the timer when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the user navigates away
    return () => clearInterval(timer);
  }, []);

  // Show modal when timer hits 0
  useEffect(() => {
    if (secondsElapsed === 0) {
      setShowModal(true);
      
    }
    if(secondsElapsed<0)
        setSecondsElapsed(0);
  }, [secondsElapsed]);

  const handleModalClose = (continueReading: boolean) => {
    setShowModal(false);
    if (continueReading) {
      setSecondsElapsed(5); // Reset timer
    } else {
      router.push('/pages/easy'); // Navigate to quiz page
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Easy Comprehension!</h1>
      <p>In a world of words, where letters dance,
Random text appears, a curious chance.
English whispers secrets, both old and new,
A symphony of syllables, a linguistic brew..</p>
      <p>Seconds Elapsed: {secondsElapsed}</p>
      {showModal && (
        <Modal onClose={handleModalClose} />
      )}
    </div>
  );
};

export default TimerPage;
