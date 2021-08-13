import React from "react"
import CheckBox from "./CheckBox"

function MyApp(){
    return (
      <div className="todo-list">
        <h1 className="heading">Welcome</h1>
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        
      </div>
    )
  }

  export default MyApp