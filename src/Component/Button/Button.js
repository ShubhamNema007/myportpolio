import React from 'react';
import "./Button.scss";

function Button(props) {
    return (
        <div>
            <button className='main-btn'>
                {props.mainbtn}
            </button>
        </div>
    )
}

export default Button
