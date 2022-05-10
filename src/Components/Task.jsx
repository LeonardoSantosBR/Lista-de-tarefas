import { useNavigate } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { HiAnnotation } from "react-icons/hi";

import "./Styles/Task.css";

const Task = ({ task, handleTaskComplete, DeleteTask }) => {
  const navigate = useNavigate();

  const handleTaskDetailsDirect = () => {
    navigate(`/${task.title}`)
  };

  return (
    <div
      className="container_task"
      style={task.complete ? { borderLeft: "9px solid cadetblue" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskComplete(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => DeleteTask(task.id)}
        >
          <CgClose />
        </button>

        <button className="see-task-details-button" onClick={handleTaskDetailsDirect}>
          <HiAnnotation />
        </button>
      </div>
    </div>
  );
};

export default Task;
