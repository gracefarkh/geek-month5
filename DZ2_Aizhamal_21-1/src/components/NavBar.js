import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul className='navBar'>
            <li>
                <Link to='/'>Main Page</Link>
            </li>
            <li style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                <Link to='/posts'>Posts Page</Link>
            </li>
        </ul>
    )
}

export default NavBar
