"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

function UpdatePrompt() {

  const router = useRouter();

  const [submitting, setSubmmiting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })
  const [promptId,setPrompId] = useState('');

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmmiting(true);

    if(!promptId) return alert("Prompt ID not found")

    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPrompId(params.get('id'));
  },[]);

  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json();

        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
    }
    if(promptId) getPromptDetails();
  },[promptId])

  return (
    <Form 
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePrompt