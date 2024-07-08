import React, { useState, useEffect } from 'react';
import Form from './Form';
import { useParams } from 'react-router-dom';

export default function EditTask() {
  const [data, setData] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/tasks/${id}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, []) 

  return (
    <div>
       <Form 
        data={data} 
      />
    </div>
  )
}
