import React, { useState } from "react";

const AdvFormVal2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setConfPass] = useState("");
  const [error, setError] = useState({});
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handleCPassChange = (e) => {
    setConfPass(e.target.value);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const checkValid = () => {
    let valid = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let lerror = {
      name: "",

      email: "",
      password: "",
      confpass: "",
    };
    if (name.length < 2) {
      lerror.name = "First name must be atleast 2 characters";
      valid = false;
    }
    if (email.length < 7) {
      lerror.email = "Email must be atleast 7 characters";
      valid = false;
    }
    if (!emailRegex.test(email)) {
      lerror.email = "Email is not valid";
      valid = false;
    }
    if (password.length < 7) {
      lerror.password = "Password must be atleast 7 characters";
      valid = false;
    }
    if (!passRegex.test(password)) {
      lerror.password =
        "Min 8 characters, atleast 1 letter & 1 number required";
      valid = false;
    }
    console.log(lerror);
    if (password !== cpassword) {
      lerror.confpass = "Passwords do not match";
      valid = false;
    }
    setError(lerror);

    return valid;
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
    if (checkValid()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Error in form submission");
    }
  };
  return (
    <div className="m-4">
      <h2>Advanced Form Validation</h2>
      <div className="mb-3">
        <label htmlFor="name" className="me-4">
          Name
        </label>
        <input type="text" id="name" onChange={handleNameChange} />
        {isSubmitted && error.name && (
          <p className="text-danger">{error.name}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="me-4">
          Email
        </label>
        <input type="text" id="email" onChange={handleEmailChange} />
        {isSubmitted && error.email && (
          <p className="text-danger">{error.email}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="pass" className="me-4">
          Password
        </label>
        <input type="text" id="pass" onChange={handlePassChange} />
        {isSubmitted && error.password && (
          <p className="text-danger">{error.password}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cpass" className="me-4">
          Confirm Password
        </label>
        <input type="text" id="cpass" onChange={handleCPassChange} />
        {isSubmitted && error.confpass && (
          <p className="text-danger">{error.confpass}</p>
        )}
      </div>
      <button className="btn btn-success " onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AdvFormVal2;
