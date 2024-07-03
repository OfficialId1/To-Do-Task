import { useState } from 'react';
import Form from './Form';

export default function AddTask({setAdd}) {
    const [name, setName] = useState();

  return (
    <div>
       <Form name={name} setName={setName} setAdd={setAdd}/>
    </div>
  )
}
