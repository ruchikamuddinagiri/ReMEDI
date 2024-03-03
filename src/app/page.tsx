'use client'
import Image from "next/image";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    // Attempt to retrieve the session token from sessionStorage
    console.log("hi")
    const sessionToken = sessionStorage.getItem('email');
    if(sessionToken){
      setShowModal(false)
    }
   console.log('email:', sessionToken);
  }, []);
  

   // Empty dependency array ensures this runs once on mount

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(false); // Hide modal on form submission

    
    // Implement further actions here, like form validation or data submission
    const formData = new FormData(event.currentTarget)

    const email  = formData.get('email')
    const name = formData.get('name')
    const age = formData.get('age')

    sessionStorage.setItem('email', String(email));

    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, age }),
    })

    router.push('/');
  };

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo1.png"
              alt="ReMEDI Logo"
              className="dark:invert"
              width={200}
              height={200}
              priority
            />
          </a>
          
        </div>
        <p style={{ color: 'black', fontSize: '120px', fontWeight: 'bold', marginBottom: '0' }}>ReMEDI</p>
        <center>
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Reading Made Easy For Dyslexic Individuals&nbsp;
          {/* <code className="font-bold">src/app/page.tsx</code> */}
        </p>
        
      </div>
        </center>
      
      

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">

        <a
          href="/text"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Plain Text{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Paste your text and our tool will adapt the font, size, and color to create a dyslexia-friendly reading experience.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Documents or Webpages{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Upload documents or enter web URLs and our platform will optimize their format for dyslexic-friendly reading.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Reading Comprehension{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Enhance your learning with practice tools designed to strengthen reading comprehension for dyslexic readers.
          </p>
        </a>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-70 z-40 flex justify-center items-center">
          
          <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-xl transform transition-all w-3/4 h-3/4 max-w-4xl p-6 align-middle relative">
          <center>
          <h1 className="text-xl font-medium mb-4">Welcome to Remedi</h1>
          <h2 className="text-xl font-medium mb-4">We'd like to know you a little better before you try us out</h2>
          </center>
          
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" name="age" id="age" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your age" />
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}