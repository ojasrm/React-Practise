import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

/* function MyApp3(){
    const todoItems = todosData.map(item => <TodoItem key={item.id}  item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
        
      </div>
    )
  } */

class MyApp3 extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
         this.setState(prevState => {
             const updatedTodos = prevState.todos.map(todo => {
                 if (todo.id === id) {
                     todo.Completed = !todo.Completed
                 }
                 return todo
             })
             return {
                 todos: updatedTodos
             }
         })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id}  item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
            {todoItems}
            
            </div>
        )
    }
    
}

export default MyApp3