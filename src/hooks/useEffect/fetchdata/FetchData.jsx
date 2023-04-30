import React, { useEffect, useState } from 'react'
import SinglePerson from './SinglePerson';

const FetchData = () => {
    const[people,setPeople] = useState([]);
    const [loading,setLoading] = useState(false);
    const url = 'https://api.github.com/users';
    const getUsers = async() => {
        setLoading(true)
        const response = await fetch(url); //return a promise
        const data = await response.json();
        setLoading(false);
        setPeople(data);

        console.log(people)
    }

    useEffect(()=>{
        getUsers()
        
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <>
        <div className="container">
            <div className="row">
                {people.map((person)=>{
                    return <SinglePerson {...person}/>
                })}
                
            </div>
        </div>
    </>
  )
}

export default FetchData