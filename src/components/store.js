import { createStore, combineReducers, applyMiddleware } from "redux"
import listReducer from "../reducers/listReducer"
import thunk from "redux-thunk"
// import { create } from 'domain'


const rootReducer = combineReducers({
    listReducer
})

const store =createStore(rootReducer, applyMiddleware(thunk))

export default store