import React, { useState } from 'react';
import Form from './Form';

export default function AddTask() {
    const [name, setName] = useState();

  return (
    <div>
       <Form name={name} setName={setName}/>
    </div>
  )
}
