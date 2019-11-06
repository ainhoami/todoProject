import Axios from "axios"

// export function addItem(item){
//     return{
//         type:"ADD_ITEM",
//         payload:item
//     }
// }


export function addItem(item){
    return dispatch=>{
        Axios.post("/items", {item: item}).then(resp=>{
            dispatch({
                type:"ADD_ITEM",
                payload:resp.data
            })
        })
        
    }
}

export function getItems(){
    return dispatch=>{
        Axios.get("/items").then(resp =>{
            dispatch({
                type:"LIST_ITEMS",
                payload: resp.data
            })
        })
        
    }
}
