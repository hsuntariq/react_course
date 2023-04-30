import React from 'react'

const SingleBirthday = ({id,image,name,DOB,remove}) => {
  return (
    <>
        <div className="row text-center">
            <div className="col-lg-3 col-3">
                <img style={{width:'100%'}} src={image} alt="" />
            </div>
            <div className="col-lg-6 col-6">
                <h4>{name}</h4>
                <h6 className='text-secondary'>{DOB}</h6>
            </div>
            <div className="col-lg-3 col-3">
                <button onClick={()=>remove(id)} className='btn btn-danger'>Remove</button>
            </div>
        </div>
    </>
  )
}

export default SingleBirthday