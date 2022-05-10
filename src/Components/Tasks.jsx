import React from 'react';
import Task from './Task';


const Tasks= ({tasks, handleTaskComplete, DeleteTask})=>{
    return(
        <>
           {tasks.map(task => <Task task={task} DeleteTask={DeleteTask}  handleTaskComplete={handleTaskComplete}/>)}
        </>
    );
}

export default Tasks