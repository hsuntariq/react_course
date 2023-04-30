import React, { useState } from 'react'

const UseStateBasics = () => {
    const[title,setTitle] = useState('hello world');
    const handleClick = () =>{
        if(title === 'hello world'){
            setTitle('new world')
        }else{
            setTitle('hello world')
        }
    }
  return (
    <>
        <div className="container text-center text-capitalize">
            <h1> {title} </h1>
            <button onClick={handleClick} className="btn btn-success">
                Change Title
            </button>
        </div>
    </>
  )
}

export default UseStateBasics