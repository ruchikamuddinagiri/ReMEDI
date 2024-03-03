// pages/index.tsx
'use client'

import Link from 'next/link';
import  '../styles/main.css'; // Import CSS file for styling

const IndexPage = () => {


  return (
    <div className="container">
      <h1>Select Difficulty Level</h1>
      <div className="buttons">
        <Link className="button" href="/pages/comprehension/easy"> Easy
          {/* <a className="button">Easy</a> */}
        </Link>
        <Link className="button" href="/pages/comprehension/medium"> Medium
          {/* <a className="button">Medium</a> */}
        </Link>
        <Link className="button" href="/pages/comprehension/hard"> Hard
          {/* <a className="button">Hard</a> */}
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
