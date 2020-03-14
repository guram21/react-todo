import React, { Component } from 'react'
import './App.css'

class App extends Component {

  // constructor () {
  //   super();
  //   this.state = { count: 4, counterName: 'First' }
  // }

  state = {
    list: [
      {
        id: 1, name: 'First todo',
      },
      {
        id: 2, name: 'Second todo',
      },
    ],
    todo: '',
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentWillUnmount () {
    console.log('componentWillMount')
    // unplug action
  }

  componentDidMount () {
    // fetch().then( this.setState(...) )
    console.log('componentDidMount')
  }

  addTodo = () =>
    // this.setState({ count: this.state.count + 1}) // ok

    this.setState((prev) => ({
      list: [...prev.list, {
        id: Math.random(),
        name: this.state.todo
      }], todo: ''
    })) // ok

// this.state.count = 123; // not ok
  // console.log(this.state)

  inputTodoChange = (e) => {
    this.setState({ todo: e.target.value})
  }

  deleteTodo = (id) => {
    const list = this.state.list.filter(el => el.id !== id)
    this.setState({ list })
  }

  render () {
    console.log('render')
    return (<div>
      <input type="text"
             value={this.state.todo}
             onChange={this.inputTodoChange}
             placeholder='Todo name' />

      <button onClick={this.addTodo}>Add to-do</button>

      <ul>
        {
          this.state.list.map(el => <li key={el.id}>{el.name}
          <button onClick={() => this.deleteTodo(el.id)}>Delete</button>
          </li>)
        }
      </ul>

    </div>)
  }
}

function App2 () {
  return (<div>Hello</div>)
}

export default App
