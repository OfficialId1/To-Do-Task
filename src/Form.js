import React, { useRef } from 'react';
import { addTask, editTask } from './api';

export default function Form({name, setName, task, setEdit}) {
    const ref = useRef();

  return (
    <div className='form-wrapper'>
       <h2>{task ? 'Edit Task' : 'Add Task'}</h2>

       <form 
            onSubmit={task ? 
                e => editTask(e, ref, task).then(() => setEdit(false)) : 
                e => addTask(e, ref).then(() => setName(''))
            }
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
