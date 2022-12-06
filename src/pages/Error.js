import React from "react";
import { Redirect } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Would You Rather Stare at a 404 Error...or Keep Playing</h2>
      <Redirect to="/"><button className="btn btn-secondary">Back To Login</button></Redirect>
    </div>
  );
};
export default Error;
