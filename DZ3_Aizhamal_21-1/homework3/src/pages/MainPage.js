import { useSelector , useDispatch } from 'react-redux'
import '../index.css'

function MainPage() {
    const{value}  = useSelector(state => state);
    const dispatch = useDispatch()

    const increaseCount = () =>{
        dispatch({
            type:'INCREASE_COUNT'
        })
    }

    const decreaseCount = () => {
        dispatch({
            type: 'DECREASE_COUNT' 
    })
}
    return (
        <div>
        <h1 >{value}</h1>
        <button  className = 'increase'
        onClick={increaseCount}>+</button>
        <button  className = 'decrease'
        onClick={decreaseCount}>- </button>
        </div>
    )
}
export default MainPage