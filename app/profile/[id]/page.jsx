"use client"

import {useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

function MyProfile({params}) {  
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const {data: session} = useSession();
    const {id} = params; // user id

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/users/${id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if(session?.user.id) fetchPost();
    }, []);

    return (
        <Profile 
            name="Other user"
            desc="Welcome to other profile"
            data={posts}
        />
    )
}

export default MyProfile