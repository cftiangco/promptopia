"use client"

import {useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

function MyProfile() {

    const router = useRouter();
    
    const [posts, setPosts] = useState([]);
    const {data: session} = useSession();

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = () => {

    }

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if(session?.user.id) fetchPost();
    }, []);

    return (
        <Profile 
            name="My"
            desc="Welcome to your personalize profile page!"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile