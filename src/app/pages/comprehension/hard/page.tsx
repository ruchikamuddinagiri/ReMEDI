// pages/timer.tsx
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '../../../components/model'; // Assuming you have a Modal component
import "../../styles/comp.css"

const TimerPage = () => {
  const router = useRouter();
  const [secondsElapsed, setSecondsElapsed] = useState(30);
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
      setSecondsElapsed(30); // Reset timer
    } else {
      router.push('/pages/easy'); // Navigate to quiz page
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Easy Comprehension!</h1>
      <p>The water cycle is a continuous process that recycles water on Earth. It starts when the Sun heats up water in rivers, lakes, and oceans, causing it to evaporate and turn into water vapor. This vapor rises into the air and cools down, forming clouds in a process called condensation. When the clouds get heavy, they release the water as rain or snow, which is called precipitation. The water then returns to rivers, lakes, and oceans, starting the cycle all over again. This cycle is crucial because it provides fresh water for plants, animals, and people</p>
      <p>Seconds Elapsed: {secondsElapsed}</p>
      {showModal && (
        <Modal onClose={handleModalClose} />
      )}
    </div>
  );
};

export default TimerPage;
