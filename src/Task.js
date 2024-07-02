import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { deleteTask } from './api';

export default function Task() {
  const [display, toggleDisplay] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState();

  //to fetch new data whenever task changes (add, delete, edit)
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [tasks]) 

  return (
    <div className='main'>
        <h2 className='main-heading'>To-Do Tasks</h2>

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
                                <button 
                                    onClick={() => {setEdit(true); setTask(task);}}
                                    className='btn edit'
                                >Edit</button>

                                <button 
                                    onClick={() => {setTask(task); deleteTask(task)}}
                                    className='btn del'
                                >Delete</button>
                           </span>
                    </div>
                )}</div>
            }
        </div>

        <div className='add-task'><AddTask /></div>

        <div>{edit && <EditTask task={task} setEdit={setEdit} />}</div>
    </div>
  )
}
