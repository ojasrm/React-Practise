import React from "react"

function handleClick() {
    console.log("I was clicked!")
}

function MyApp5(){
    return (
      <div>
        <img onMouseOver={() => console.log("I was hovered")} src="https://source.unsplash.com/300x300/?nature" />
        <br />
        <br />
        <button onClick={handleClick} >Click here</button>
        
      </div>
    )
  }

  export default MyApp5