import React, { useState } from 'react';
import Form from './Form';

export default function EditTask({task, setEdit}) {
    const [name, setName] = useState(task.name);

  return (
    <div className='edit-task'>
       <Form 
        name={name} 
        setName={setName} 
        task={task} 
        setEdit={setEdit}
      />
    </div>
  )
}
