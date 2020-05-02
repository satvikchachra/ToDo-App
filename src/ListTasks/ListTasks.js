import React from 'react';
import './ListTasks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
const ListItems = (props) => {

    const tasks = props.tasks;
    const tasksList = tasks.map(task => {
        return (
            <div className='ListTasks' key={task.key}>
                <p>
                    <input type='text'
                        id={task.key}
                        value={task.text}
                        onChange={(e) => props.setUpdate(e.target.value, task.key)} />
                    <span>
                        <FontAwesomeIcon className='faicons' icon='trash'
                            onClick={() => props.deleteTask(task.key)} />
                    </span>
                </p>

            </div>)
    })
    return (
        <div className='ListTasks'>
            <FlipMove duration={300} easing='ease-in-out'>
                {tasksList}
            </FlipMove>
        </div>
    );
}

export default ListItems;
