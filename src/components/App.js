import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Main from "./Main"
import Form from "./Form"


function App() {
  return (
    <Provider store={store}>
      <div>
        <Main/>
        <Form/>
    </div>
    </Provider>
  )
}

export default App
