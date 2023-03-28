import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PostMoreInfo() {
    const [post, setPosts] = useState("")
    const {id}=useParams();
    const navigate = useNavigate()

    const goToBack=()=>{
        navigate(-1)
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(responce => responce.json())
        .then(data => setPosts(data))
    }, [id])
    console.log(post);
    return (
        <>
            <div>
                <h4>{post.id}</h4>
                <button onClick={goToBack}>Back</button>
                <div className='photos'>
                    <img src={post.url} alt='' />
                </div>
            </div>
        </>
    )
}

export default PostMoreInfo
