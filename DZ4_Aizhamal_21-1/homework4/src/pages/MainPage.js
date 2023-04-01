import React, { useState } from 'react'
import '../App'
import { useDispatch, useSelector } from 'react-redux'

function MainPage() {
    const dispatch = useDispatch()
    const [firstInput , setFirstInput] = useState(0)
    const [secondInput , setSecondInput] = useState(0)


    const {result} = useSelector(state => state)

    const Plus = () =>{
        dispatch({
            type:'PLUS' ,
            payload:{num1:firstInput ,
                    num2:secondInput}
        })
    }

    const Minus = ()=>{
        dispatch({
            type:'MINUS' , 
            payload:{num1:firstInput ,
                num2:secondInput}
        })
    }

    const Multiply = ()=>{
        dispatch({
            type:'MYLTIPLY' , 
            payload:{num1:firstInput ,
                num2:secondInput}
        })
    }
    const Divide = ()=>{
        dispatch({
            type:'DIVIDE' , 
            payload:{num1:firstInput ,
                num2:secondInput}
        })
    }
    return (
        <>
        <div>
            <input className='firstNum' 
            type='Number'
            onChange={(event)=>setFirstInput(event.target.value)}
            />
        </div>
        <div>
            <input className='secondNum'
            type='Number'
            onChange={(event) => setSecondInput(event.target.value)}
            />
        </div>
        <button className='plus' onClick={Plus}>+</button>
        <button className='minus' onClick={Minus}>-</button>
        <button className='multiply' onClick={Multiply}>*</button>
        <button className='divide' onClick={Divide}>/</button>
        <h1>{result}</h1>
        </>
    )
}

export default MainPage
