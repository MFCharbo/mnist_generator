import React, {useState, useEffect} from 'react';
import Counter from './Counter'
import '../styles/Clothing.css';


function Clothing(props) {
    
    const [count, setCount]  = useState(0)
    const [limitReached, setLimitReached] = useState(false)
    const title = props.title
    const imgPath = props.imgPath

    const resetBool = () => {
        setLimitReached(false)
    }

    const handleChange = (e) => {
        if (e) {
            const x = parseInt(e, 10) 
            if (x >= 100){
                setCount(100)
                setLimitReached(true)
                setTimeout(
                    resetBool,
                    5000
                )
            }else{
                setCount(x)
                setLimitReached(false)
            }

        }else{
            setCount(0)
        }
    }

    const handleClick = (type) => {
        if (type === "i"){
            if (count < 100){
                setCount(count + 1)
                setLimitReached(false)
            }else{
                setLimitReached(true)
                setTimeout(
                    resetBool,
                    3000
                )
            }
        }else{
            if (count > 0){
                setCount(count - 1)
                setLimitReached(false)
            }else{
                setLimitReached(true)
                setTimeout(
                    resetBool,
                    3000
                )
            }

        }
    }

    return (

        <div className="fashion item">
            <div className='fashion-item title'>
                <p><b>{title}</b></p>
            </div>  
            <div className='fashion-item img'>
                <img src={imgPath} alt={title}></img>
            </div>
            <Counter count={count} limitReached={limitReached} onIncrement={() => handleClick("i")} onDecrement={() => handleClick("d")} onChange={handleChange} />
            <div className="fashion-item submit">
                <button className='fashion-item submit-btn'>Generate</button>
            </div>
        </div>
    );

    
}

export default Clothing