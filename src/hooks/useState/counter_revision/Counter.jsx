import React from "react";

const Counter = () => {
  return <>
    <div className="container text-center text-capitalize">
        <h1>counter</h1>
        <h1>0</h1>
        <button className="btn btn-danger mx-2">Decrease</button>
        <button className="btn btn-outline-warning mx-2">Reset</button>
        <button className="btn btn-success mx-2">Increase</button>
    </div>
  </>;
};

export default Counter;
