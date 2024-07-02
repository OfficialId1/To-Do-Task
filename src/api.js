// to delete a task
export function deleteTask(task){
    fetch(`http://localhost:3001/tasks/${task.id}`,
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }
    ).then(res => res.json())
}

// function to add a task
export function addTask(e, ref){
    e.preventDefault();

    return (
        fetch('http://localhost:3001/tasks',
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"name" : ref.current.value})
            }
        ).then(res => res.json())
    )
}

 // function to edit a task
 export function editTask(e, ref, task){
    e.preventDefault();

    return (
        fetch(`http://localhost:3001/tasks/${task.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"name" : ref.current.value})
            }
        ).then(res => res.json())
    )
}