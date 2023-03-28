const initialState = {
    value: 0
}

export function reducer (state = initialState,action){
    if(action.type ==='INCREASE_COUNT'){
        return{...state, value:state.value +1}
    }
    else if (action.type === 'DECREASE_COUNT'){
        if (state.value === 0){
            return state;
        } else {
            return {...state , value: state.value -1}
        }
    }
    return state
}
