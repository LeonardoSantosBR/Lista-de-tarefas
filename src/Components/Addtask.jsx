import React, { useState } from 'react';


import "./Styles/moreStyle.css"
import Button from './Button';


const Addtask = ({handleAddtask}) => {
    const [inputData, setInputdata]= useState("")

    const handleInputchange= (e)=>{
       setInputdata(e.target.value)
    }

    const ClickAddTask= ()=>{
        if(inputData.length===0 || inputData==null){
            alert('Certifique-se de enviar uma tarefa')
        }else{
            handleAddtask(inputData)
            setInputdata('')
        }
        
    }

    return (
        <div className='styleComponent'>
            <input onChange={handleInputchange} value={inputData} className='input_style' type="text" />
            <Button onClick={ClickAddTask} >Adicionar</Button>
        </div>
    );
}
 
export default Addtask;