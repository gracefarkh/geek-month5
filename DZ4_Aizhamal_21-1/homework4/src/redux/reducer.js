const initialState = {
    result:0
}

export function reducer (state = initialState , action){
    if(action.type === 'PLUS'){
        if(action.payload.num1 === '' || action.payload.num2 === '')
        return {result: 'Заполните другое поле!!'}

        return {
            ...state , result:+action.payload.num1 + +action.payload.num2}
    }
    else if(action.type === 'MINUS'){
        if(action.payload.num1 === '' || action.payload.num2 === '')
        return {result: 'Заполните другое поле!!'}

        return {
            ...state , result:+action.payload.num1 - +action.payload.num2}
    }
    else if(action.type === 'MYLTIPLY'){
        if(action.payload.num1 === '' || action.payload.num2 === '')
        return {result: 'Заполните другое поле!!'}

        return {
            ...state , result:+action.payload.num1 * +action.payload.num2}
    }
    if(action.type === 'DIVIDE'){
        if(action.payload.num1 === '' || action.payload.num2 === '')
        return {result: 'Заполните другое поле!!'}

        return {
            ...state , result:+action.payload.num1 / +action.payload.num2}
    }
    return state
}