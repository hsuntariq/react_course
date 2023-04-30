import React from "react";

const SinglePerson = ({...person}) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-3">
            <img style={{ width: "100%" }} src={person.avatar_url} alt="" />
          </div>
          <div className="col-lg-4">
            <h5>{person.login}</h5>
            <h6 className="text-secondary">{person.type}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePerson;
