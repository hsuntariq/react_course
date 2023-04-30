import React, { useState } from 'react'
import { data } from './data'
import SingleBirthday from './SingleBirthday'

const Birthday = () => {
    const [birthday,setBirthday] = useState(data)
    // console.log(birthday)
    const removePerson = (id) => {
        let newBirthdays = birthday.filter(person=>person.id !== id);
        setBirthday(newBirthdays)
        // let newBirthdays = birthday.filter(person)
    }
  return (
    <>
        <div className="container col-lg-4 col-md-6 col-sm-6 col-12 shadow">
            <h3 className='text-info text-center' >Total birthdays today:{birthday.length}</h3>
        {birthday.map((person)=>{
            return  <SingleBirthday {...person} remove = {removePerson}/>
        })}
        <div onClick={()=>setBirthday([])} className="button btn btn-danger my-3 w-100">
            Remove All
        </div>
        <div onClick={()=>setBirthday(data)} className="button btn btn-success my-3 w-100">
            Refresh
        </div>
        </div>
       
    </>
  )
}

export default Birthday