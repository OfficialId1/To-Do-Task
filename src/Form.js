import React, { useEffect, useRef, useState } from 'react';
import { addTask, editTask } from './api';
import { Link, useNavigate } from 'react-router-dom';

export default function Form({ task }) {
    const ref = useRef();
    const navigate = useNavigate();
    const [name, setName] = useState();

    useEffect(() =>{
      setName(task?.name);
    }, [task])

  return (
    <div className='form-page'>
      <div className='form-wrapper'>
        <h2 className='heading'>{task ? 'Edit Task' : 'Add Task'}</h2>

        <form 
            onSubmit={task ? 
                e => editTask(e, ref, task).then(() => navigate('/')) : 
                e => addTask(e, ref).then(() => navigate('/'))
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

          <button className='btn submit'>Submit</button>
 
          <Link 
              className='link cancel' 
              to='../'
          >Cancel</Link>
        </form>
      </div>
    </div>
  )
}
