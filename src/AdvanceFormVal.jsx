import React, { useState } from "react";

const AdvanceFormVal = () => {
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
      name: {
        status: false,
        detail: "",
      },
      email: {
        status: false,
        detail: "",
      },
      password: {
        status: false,
        detail: "",
      },
      confpass: {
        status: false,
        detail: "",
      },
    };
    if (name.length < 2) {
      lerror.name.status = true;
      lerror.name.detail = "First name must be atleast 2 characters";
      valid = false;
    }
    if (email.length < 7) {
      lerror.email.status = true;
      lerror.email.detail = "Email must be atleast 7 characters";
      valid = false;
    }
    if (!emailRegex.test(email)) {
      lerror.email.status = true;
      lerror.email.detail = "Email is not valid";
      valid = false;
    }
    if (password.length < 7) {
      lerror.password.status = true;
      lerror.password.detail = "Password must be atleast 7 characters";
      valid = false;
    }
    if (!passRegex.test(password)) {
      lerror.password.status = true;
      lerror.password.detail =
        "Min 8 characters, atleast 1 letter & 1 number required";
      valid = false;
    }
    console.log(lerror);
    if (password !== cpassword) {
      lerror.confpass.status = true;
      lerror.confpass.detail = "Passwords do not match";
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
        {isSubmitted && error.name?.status && (
          <p className="text-danger">{error.name?.detail}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="me-4">
          Email
        </label>
        <input type="text" id="email" onChange={handleEmailChange} />
        {isSubmitted && error.email?.status && (
          <p className="text-danger">{error.email?.detail}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="pass" className="me-4">
          Password
        </label>
        <input type="text" id="pass" onChange={handlePassChange} />
        {isSubmitted && error.password?.status && (
          <p className="text-danger">{error.password?.detail}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cpass" className="me-4">
          Confirm Password
        </label>
        <input type="text" id="cpass" onChange={handleCPassChange} />
        {isSubmitted && error.confpass?.status && (
          <p className="text-danger">{error.confpass?.detail}</p>
        )}
      </div>
      <button className="btn btn-success " onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AdvanceFormVal;
