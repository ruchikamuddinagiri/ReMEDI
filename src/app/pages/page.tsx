// pages/index.tsx
import Link from 'next/link';
import '../styles/main.css'; // Import CSS file for styling

const IndexPage = () => {
  return (
    <div className="container">
      <p className="exerciseExplanation">
        This exercise is developed considering the Flesch Grade Level to aid dyslexic users in reading and understanding the content more effectively.
      </p>
      <p className="exerciseExplanation2">Select Difficulty Level</p>
      <div className="buttons">
        <Link className="button" href="/pages/comprehension/easy"> Easy</Link>
        <Link className="button" href="/pages/comprehension/medium"> Medium</Link>
        <Link className="button" href="/pages/comprehension/hard"> Hard</Link>
      </div>
    </div>
  );
};

export default IndexPage;