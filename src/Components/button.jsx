import React from 'react';
import "./Styles/moreStyle.css"

const Button = ({children,onClick}) => {
    return (
        <button onClick={onClick} className="button_style"> {children} </button>
    );
}
 
export default Button;