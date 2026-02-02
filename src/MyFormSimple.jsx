import React, { useState } from "react";

const MyFormSimple = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fnameErr, setFnameErr] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const handleFnamChange = (e) => {
    setFname(e.target.value);
  };
  const handleLnamChange = (e) => {
    setLname(e.target.value);
  };
  const checkValid = () => {
    let valid = true;
    if (fname.length < 3) {
      setFnameErr("First name must be atleast 2 characters");
      valid = false;
    } else {
      setFnameErr("");
    }
    if (lname.length < 3) {
      setLnameErr("Last name must be atleast 3 characters");
      valid = false;
    } else {
      setLnameErr("");
    }
    if (fname == "" && lname == "") {
      setFnameErr("First name is required");
      setLnameErr("Last name is required");
      valid = false;
    }
    return valid;
  };
  const handleSubmit = () => {
    if (checkValid()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Error in form submission");
    }
  };
  return (
    <div className="m-4">
      <h2>Simple Form Validation</h2>
      <div className="mb-3">
        <label htmlFor="fname" className="me-4">
          First Name
        </label>
        <input type="text" id="fname" onChange={handleFnamChange} />
        {fnameErr && <p className="text-danger">{fnameErr}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="me-4">
          Last Name
        </label>
        <input type="text" id="lname" onChange={handleLnamChange} />
        {lnameErr && <p className="text-danger">{lnameErr}</p>}
      </div>
      <button className="btn btn-success " onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MyFormSimple;
