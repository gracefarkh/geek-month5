import { types } from "./types";


export const addAction = (text) =>{
    return{
        type:types.ADD , 
        payload : text
    }
}

export const clearAction = () =>{
    return{
        type:types.CLEAR
    }
}