import React, { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getItems} from "../actions/listActions"

export default function(props){
    const items = useSelector(appstate => appstate.listReducer.items)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getItems())
    },[])


    return (
        <div>
            <p>Item count: {items.length}</p>

            {items.map((item, i)=>(

                <p key={"item" + i}>{item.item}</p>

            ))}


        </div>
    )


}