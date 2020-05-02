import React, { Component } from 'react';
import './App.css';
import ListTasks from './ListTasks/ListTasks';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends Component {

  // Initial state
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      currentTask: {
        text: '',
        key: ''
      }
    };

  }

  // Input text handler
  inputHandle = (event) => {

    this.setState({
      currentTask: {
        text: event.target.value,
        key: Date.now()
      }
    });

  }

  // Add task event handler
  addTask = (event) => {
    event.preventDefault();

    const newTask = this.state.currentTask;

    if (newTask !== '') {

      const tasksArr = [...this.state.tasks, newTask];

      this.setState({
        tasks: tasksArr,
        currentTask: {
          text: '',
          key: ''
        }
      });

    }
  }

  // Delete task

  deleteTask = (key) => {
    const filteredTasks = this.state.tasks.filter(task => task.key !== key);
    this.setState({
      tasks: filteredTasks
    });
  }

  // Edit task
  setUpdate = (text, key) => {
    const tasksArr = this.state.tasks;
    tasksArr.map(task => {
      if (task.key === key) {
        task.text = text;
      }
    });

    this.setState({
      tasks: tasksArr
    });
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form'>
            <input type='text'
              placeholder='Enter the task'
              value={this.state.currentTask.text}
              onChange={this.inputHandle}
            />
            <button type='submit' onClick={this.addTask}>Add</button>
          </form>
        </header>
        <ListTasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          setUpdate={this.setUpdate}
        />
      </div>
    )

  }
}

export default App;