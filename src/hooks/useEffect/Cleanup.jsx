import React, { useEffect, useState } from 'react'

const Cleanup = () => {
    const [size,setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth)
        })

        return ()=>{
            window.removeEventListener('resize',()=>{
                setSize(window.innerWidth)
            })
        }
    })
  return (
    <>
        <div className="container text-center">
            <h1>{size}px</h1>

        </div>
    </>
  )
}

export default Cleanup