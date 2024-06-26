import React, { useRef } from 'react';

// to delete a task
export function deleteTask(task){
    fetch(`http://localhost:3001/tasks/${task.id}`,
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
    ).then(res => res.json())
}

export default function Form({name, setName, task, setEdit}) {
    const ref = useRef();

    // function to add a task
    function addTask(e){
        e.preventDefault();

        fetch('http://localhost:3001/tasks',
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"name" : ref.current.value})
            }
        ).then(res => res.json())
        .then(() => setName(''));
    }

    // function to edit a task
    function editTask(e){
        e.preventDefault();

        fetch(`http://localhost:3001/tasks/${task.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"name" : ref.current.value})
            }
        ).then(res => res.json())
        .then(() => setEdit(false));
    }

  return (
    <div className='form-wrapper'>
       <h2>{task ? 'Edit Task' : 'Add Task'}</h2>

       <form 
            onSubmit={task ? editTask : addTask}
            className='form'
        >
        <input 
            type="text" 
            value={name}
            ref={ref}
            onChange={e => setName(e.target.value)}
            required
        />

        <button className='btn'>Submit</button>
        
        {task && <button 
            className='btn cancel' 
            onClick={() => setEdit(false)}
        >Cancel</button>}
       </form>
    </div>
  )
}
