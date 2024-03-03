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
	<form action="upload/api" method="post" enctype="multipart/form-data">
	  <input id="file" name="file" type="file" />
	  <button>Upload</button>
	</form>
  )
}