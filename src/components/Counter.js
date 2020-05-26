import React, {useState, useEffect} from 'react';
import '../styles/Counter.css';

export default function Counter(props) {
    const count = props.count
    const showToolTip = props.limitReached

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }

    let visibility = showToolTip ? 'visible' : ''
    let spanToolTip = showToolTip? <span className="tooltiptext">Ayoooo</span> : '' 

    return (
        <div>
            <div className={"tooltip " + visibility} >
                <span className={"tooltiptext " + visibility}>Please enter a value between 0 and 100</span>
            </div>
            <div className="container horizontal-counter">
                <div className="fashion-item decrement"><button className="fashion-item decrement-btn" onClick={props.onDecrement}>-</button></div>
                <div className='fashion-item input div'>
                    <input type='number' placeholder={count} className='fashion-item input box' value={count} onChange={handleChange}></input>
                </div>
                <div className="fashion-item increment"><button className="fashion-item increment-btn" onClick={props.onIncrement}>+</button></div>
            </div>
        </div>
    );

    
}
