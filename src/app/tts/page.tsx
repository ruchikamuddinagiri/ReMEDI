'use client'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
 
export default function Home() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const hey = formData.get('tellme')
 
    let utterance = new SpeechSynthesisUtterance(hey);
	speechSynthesis.speak(utterance);
 

  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tellme" placeholder="Speak goddamn it!!!" required />
      <button type="submit">Go</button>
    </form>
  )
}