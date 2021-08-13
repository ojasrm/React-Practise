import React from "react"

/* function MyApp4(){
    return (
      <div>
        <h1 className="heading">Welcome</h1>
      </div>
    )
  } */

/* class MyApp4 extends React.Component {
    render() {
        return (
            <div>
              <h1 className="heading">Welcome</h1>
            </div>
          )
    }
} */

/* class MyApp4 extends React.Component {
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return (
            <div>
              <h1 className="heading">Is state important to know? {this.state.answer} </h1>
            </div>
          )
    }
} */

/* class MyApp4 extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "John",
            age: 28
        }
    }
    render() {
        return (
            <div>
              <h1 className="heading">Name {this.state.name} </h1>
              <h3>Age {this.state.age} </h3>
            </div>
          )
    }
} */

class MyApp4 extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let wordDisply
        if (this.state.isLoggedIn) {
            wordDisply = "in"
        }
        else {
            wordDisply = "out"
        }
        return (
            <div>
              <h1 className="heading">You are currently logged {wordDisply} </h1>
            </div>
          )
    }
}

  export default MyApp4