"use client"

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

function CreatePrompt() {

  const router = useRouter();

  const [submitting, setSubmmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  const {data: session} = useSession();

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmmiting(true);

    try {
      const response = await fetch('api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session.user.id,
          tag: post.tag
        })
      })

      if(response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmmiting(false);
    }
  }

  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt