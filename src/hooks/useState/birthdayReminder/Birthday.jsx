import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'
const Birthday = () => {
    const [birthday,setBirthday] = useState(data)
    const removeSingleBirthday = (id) => {
        let newBirthdays = birthday.filter(salgirah=>salgirah.id !==id);;
        setBirthday(newBirthdays)
    } 
  return (
    <>
        <div className="container col-lg-6 m-auto rounded border shadow text-center text-capitalize">
            <h2>total birthdays today: {birthday.length} </h2>
            {birthday.map((salgirah)=>{
                return(
                    <>
                        <SingleBirthday {...salgirah} remove = {removeSingleBirthday} /> 
                    </>
                )
            })}
            <button onClick={()=>setBirthday([])} className="btn btn-danger mx-2">
                Remove All
            </button>
            <button onClick={()=>setBirthday(data)} className="btn btn-success">
                Refesh
            </button>
        </div>
    </>
  )
}

export default Birthday