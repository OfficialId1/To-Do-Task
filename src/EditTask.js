import React, { useState, useEffect } from 'react';
import Form from './Form';
import { useParams } from 'react-router-dom';

export default function EditTask() {
  const [tasks, setTasks] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, []) 

  const task = tasks?.find(task => task.id === id);

  return (
    <div>
       <Form 
        task={task} 
      />
    </div>
  )
}
