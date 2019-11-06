import React, { useState } from 'react'
import { addItem } from "../actions/listActions"
import { useDispatch } from "react-redux"

export default function(props){
const [item, SetItem]= useState("")
const dispatch= useDispatch()

function handleSubmit(e){
    e.preventDefault()

    dispatch(addItem(item))

}

return (

    <form onSubmit={handleSubmit}>

        <input
        type="text"
        id="item"
        name="item"
        value={item}
        onChange={e => SetItem(e.target.value)}
        />
        <button type="submit"> submit</button>
    </form>
)





}