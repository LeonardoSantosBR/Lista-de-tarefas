import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Styles/TaskDetails.css";

import { IoIosArrowDropleftCircle } from "react-icons/io";

const TaskDetails = () => {
  const navigate= useNavigate();
  const params = useParams();
  
  const handleBackbutton= ()=>{
    navigate('/')
  }
  
  return (
    <div className="TaskDetails-style">
      <div className="back-button">
        <IoIosArrowDropleftCircle onClick={handleBackbutton}>Voltar</IoIosArrowDropleftCircle>
      </div>
      <div className="DetailsTask">
        <h1>{params.tasktitle}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, vero
          deserunt! Ex cum officiis porro.
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
