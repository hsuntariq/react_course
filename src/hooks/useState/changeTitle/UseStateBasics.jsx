import React, { useState } from 'react'

const UseStateBasics = () => {
    const [title,setTitle] = useState('Hello World!')
    const handleClick = () => {
       if(title === 'Hello World!'){
            setTitle('This is React\'s World')
       }else{
        setTitle('Hello World!')
       }
    }
  return (
        <div className="container text-center">
            <h1>{title}</h1>
            <button onClick={handleClick} className="btn btn-info">
                Change Title
            </button>
        </div>
  )
}

export default UseStateBasics