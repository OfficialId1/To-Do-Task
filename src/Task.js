import React, { useEffect, useState } from 'react';
import { deleteTask } from './api';
import { Link } from 'react-router-dom';

export default function Task() {
  const [display, toggleDisplay] = useState(true);
  const [tasks, setTasks] = useState([]);

  //to fetch new data whenever task changes (add, delete, edit)
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [tasks]) 

  return (
    <div className='main'>
        <h1 className='main-heading'>To-Do Tasks</h1>

        <div className="task-list">
            <button 
                onClick={() => toggleDisplay(!display)}
                className='btn task-toggle'
            >
                {display ? 'Hide' : 'Show'}  list of tasks
            </button>
        
            {
             display && <div>{tasks.map(task => 
                    <div key={task.id} className='task'>
                           <span>{task.name}</span>
                            
                           <span>
                                <Link 
                                    to={`/edit/${task.id}`}
                                    className='link edit'
                                >Edit</Link>

                                <Link 
                                    onClick={() => deleteTask(task)}
                                    className='link del'
                                >Delete</Link>
                           </span>
                    </div>
                )}</div>
            }
        </div>

        <div 
            className='add-task'
        ><Link 
            className='link add'
            to='/add'
         >Add</Link>
        </div>
    </div>
  )
}
