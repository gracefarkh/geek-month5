import React from 'react'
import { Link } from 'react-router-dom'

function Post({post}) {
    return (
        <li>
            <h4>{post.title}</h4>
            <Link to={`/posts/${post.id}/url`}>read more...</Link>
            <p>--------------------------------</p>
        </li>
    )
}

export default Post
