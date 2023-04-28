import React, { useState } from 'react'

const Events = () => {
  const [title,setTitle] = useState('Hello World!')
  const changeTitle = () => { 
    if(title === 'Hello World!'){
      setTitle('This is a new World')
    }else{
      setTitle('Hello World!')
    }
  }
  return (
    <>
      <div className="container text-center text-capitalize">
        <h1>{title}</h1>
        <button className="btn btn-info" onClick={changeTitle}>
          Change Title
        </button>
      </div>
    </>
  )
}

export default Events