import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    let isValid = true;
    if (name.length <= 2) {
      setNameError("Name must be atleast 3 characters long");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Invalid email");
      isValid = false;
    } else if (email.length < 7) {
      setEmailError("Email must be atleast 7 characters long");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (isValid) {
      alert("Form submit successfull !!");
    }
  };
  return (
    <div className="p-5 mt-5 mainDiv">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={handleNameChange}
        value={name}
        className="form-control mb-3"
      />
      {nameError && <p className="text-danger">{nameError}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        onChange={handleEmailChange}
        value={email}
        className="form-control mb-3"
      />
      {emailError && <p className="text-danger">{emailError}</p>}
      <button
        onClick={handleSubmit}
        className="btn btn-dark text-white my-3 block text-center"
      >
        Submit
      </button>
    </div>
  );
};

export default MyForm;
