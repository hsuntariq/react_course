import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const handleClick = (e) => {

        if(e.target.innerHTML === 'Decrease'){
            setCount(count - 1)
        }if(e.target.innerHTML === 'Reset'){
            setCount(0)
        }if(e.target.innerHTML === "Increase"){
            setCount(count+1)
            // e.target.innerHTML = 'Increased';
            // setTimeout(()=>{
            //     e.target.innerHTML = 'Increase';
            // },200)
        }
    }
  return (
    <>
        <div className="container text-center">
            <h1>React Counter</h1>
            <h1>{count}</h1>
            <button onClick={handleClick} className="btn btn-danger mx-2">Decrease</button>
            <button onClick={handleClick} className="btn btn-outline-warning mx-2">Reset</button>
            <button onClick={handleClick} className="btn btn-success mx-2">Increase</button>
        </div>
    </>
  )
}

export default Counter