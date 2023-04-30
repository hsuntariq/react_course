import React from 'react'
const SingleBirthday = ({id,name,image,DOB,remove}) => {
  return (
    <>
        <div className="row my-3 border p-3">
            <div className="col-sm-3">
                <img style={{width:'70%',clipPath:'circle'}} src={image} alt="" />
            </div>
            <div className="col-sm-6">
                <h3 className='text-info'>{name}</h3>
                <h6 className="text-secondary">{DOB}</h6>
            </div>
            <div className="col-sm-3 align-center">
                <button onClick={()=>remove(id)} className="btn btn-danger">
                    Remove
                </button>
            </div>
        </div>
    </>
  )
}

export default SingleBirthday