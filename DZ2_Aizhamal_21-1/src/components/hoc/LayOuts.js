import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'


function LayOuts() {
    const navigate = useNavigate()

    const goToBack=()=>{
        navigate(-1)
    }
    return (
        <>
        <NavBar/>
        <Outlet/>
        <button onClick={goToBack}>Back</button>
        </>
    )
}

export default LayOuts
