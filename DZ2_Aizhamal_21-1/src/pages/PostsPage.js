import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Post from '../components/Post'

function PostsPage() {
    const [posts , setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(responce => responce.json())
            .then(data => setPosts(data))
    },[])
    return (
        <>
        <ul className='posts'>
            <h1>Posts Page</h1>
            {posts.slice(0, 15).map((post,index) =><Post key={index} post={post}/>)}
        </ul>
        </>
    )
}

export default PostsPage
