import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import axios from 'axios'

function HooksRedux() {

    const dispatch = useDispatch()
    const num = useSelector((state) => {
        console.log("Num :", state.num)
        return state.num})
    const users = useSelector((state) => {
        console.log("Users :" , state.users)
        return state.users})
    const favorites = useSelector((state) => {
        console.log("Favorites :" , state.favorites)
        return state.favorites})
    
    const ChangeNumber = (num) => {
        let action ={
            type: "ChangeNumber",
            payload: num
        }
        dispatch(action)
    }
    useEffect(() => {
        
    }, []);
return (
    <div>
        {num}
        <button className='btn btn-primary' onClick={()=> ChangeNumber(30)} > Change number </button>
    </div>
)
}

export default HooksRedux