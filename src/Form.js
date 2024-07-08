import React, { useEffect, useRef, useState } from 'react';
import { addTask, editTask } from './api';
import { Link, useNavigate } from 'react-router-dom';

export default function Form({ data }) {
    const ref = useRef();
    const navigate = useNavigate();
    const [state={}, setState] = useState(data);
    const {name = ''} = state;

    useEffect(() => {
      data && setState(data);
    },[data]);

    function handleChange(e) {
      setState({...state, [e.target.name] : e.target.value})
    }

    function handleSubmit(e) {
      data ? 
      editTask(e, ref, data).then(() => navigate('/')) : 
      addTask(e, ref).then(() => navigate('/'))      
    }

  return (
    <div className='form-page'>
      <div className='form-wrapper'>
        <h2 className='heading'>{data ? 'Edit Task' : 'Add Task'}</h2>

        <form 
            onSubmit={handleSubmit}
            className='form'
        >
          <input 
              type="text" 
              value={name}
              name='name'
              ref={ref}
              onChange={handleChange}
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
