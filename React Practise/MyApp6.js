import React from "react"

class MyApp6 extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
              <h1 className="heading">{this.state.count} </h1>
              <button onClick={this.handleClick} >Change</button>
            </div>
          )
    }
}

export default MyApp6