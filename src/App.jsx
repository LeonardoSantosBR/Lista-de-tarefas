import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./Components/Styles/App.css";
import "./Components/Tasks";
import "./Components/Addtask";
import "./Components/Button";

import Tasks from "./Components/Tasks";
import Addtask from "./Components/Addtask";
import TaskDetails from "./Components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddtask = (tasktitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: tasktitle,
        complete: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskComplete = (taskId) => {
    const newtask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, complete: !task.complete };

      return task;
    });

    setTasks(newtask);
  };

  const DeleteTask = (taskId) => {
    const deleted = tasks.filter((task) => task.id !== taskId);
    setTasks(deleted);
  };

  return (
    <Router>
      <div className="container">
        <h2>To-do list</h2>

        <Addtask handleAddtask={handleAddtask} />

        <Tasks
          tasks={tasks}
          DeleteTask={DeleteTask}
          handleTaskComplete={handleTaskComplete}
        />

        <Routes>
          <Route path="/:tasktitle" element={<TaskDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
