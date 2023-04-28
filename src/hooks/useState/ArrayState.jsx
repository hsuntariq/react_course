import React, { useState } from 'react'

const ArrayState = () => {
    const [titles,setTitles] = useState(['Avengers','Justice League', 'Ironman','Captain America','Dabangg'])
    const [count,setCount] = useState(0)
    const changeTitle = () => {
        if(count > 3){
            setCount(0)
        }else{
            setCount(count+1)
        }
        console.log(count)
    }

    const surpriseMe = () =>{
        let random =Math.floor(Math.random()*titles.length);
        setCount(random)
    }
  return (  
    <>
        <div className="container text-center">
            <h1>{titles[count]}</h1>
            <button onClick={changeTitle} className="btn btn-danger mx-3">
                Change Title
            </button>
            <button onClick={surpriseMe} className='btn btn-success'>Surprise me</button>
        </div>
    </>
  )
}

export default ArrayState