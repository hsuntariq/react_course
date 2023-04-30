import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
    const [count,setCount] = useState(0)
    const [newCount,setNewCount] = useState(0)
    useEffect(()=>{
        console.log('hello')
        document.title = `${count} new messages`
    },[newCount,count])
  return (
    <>
        <div className="container text-center">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} className="btn btn-info">
                Click me
            </button>
        </div>
    </>
  )
}

export default UseEffectBasics