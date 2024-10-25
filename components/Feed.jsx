"use client"

import {useState, useEffect} from 'react'

import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

function Feed() {
  const [searchText,setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
  }

  useEffect(() => {
    if(searchText === '') {
      setFilteredPost(posts);
    } else {
      let filtered = posts.filter((p) => {
        return p.prompt.toLowerCase().includes(searchText.toLowerCase()) || 
        p.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        p.creator.username.toLowerCase().includes(searchText.toLowerCase())
      })
      setFilteredPost(filtered);
    }
  },[searchText])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
      setFilteredPost(data);
    }

    fetchPost();
  }, []);

  return (
    <section>
      <form 
        action=""
        className="relative w-full flex-center"
      >

        <input 
          type="text" 
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />

      </form>

      <PromptCardList 
        data={filteredPost}
        handleTagClick={handleTagClick}
      />

    </section>
  )
}

export default Feed