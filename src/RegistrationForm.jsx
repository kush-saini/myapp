import React, { useState } from "react";
const RegistrationForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [terms, setTerms] = useState(false);
  const [dob, setDob] = useState("");

  const [fnameErr, setFnameErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [confPassErr, setConfPassErr] = useState("");
  const [genErr, setGenErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [addErr, setAddErr] = useState("");
  const [termErr, setTermErr] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [age, setAge] = useState();
  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleDob = (e) => {
    const selectedDob = e.target.value; // format: "YYYY-MM-DD"
    setDob(selectedDob);

    const today = new Date();
    const dobDate = new Date(selectedDob);

    // Remove time part for accurate comparison
    today.setHours(0, 0, 0, 0);
    dobDate.setHours(0, 0, 0, 0);

    if (dobDate >= today) {
      setDobErr("Date of Birth must be before today");
    } else {
      setDobErr("");
    }
    setAge(calculateAge(e.target.value));
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    setGenErr(""); // clear error when user selects
  };
  const handleConfPass = (e) => {
    setConfPass(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleTerms = (e) => {
    setTerms(e.target.checked);
    setTermErr("");
  };
  function calculateAge(dobString) {
    const dob = new Date(dobString); // "2026-02-19"
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }
  console.log("age =>=> ", age);
  const handleSubmit = () => {
    let isValid = true;

    if (fname.length < 3) {
      setFnameErr("First Name must be at least 3 characters long");
      isValid = false;
    } else {
      setFnameErr("");
    }
    if (city.length < 3) {
      setCityErr("City Name must be at least 3 characters long");
      isValid = false;
    } else {
      setCityErr("");
    }
    if (gender == "") {
      setGenErr("Required field");
      isValid = false;
    } else {
      setGenErr("");
    }
    if (contact.length < 3) {
      setContactErr("Contact must be at least 10 characters long");
      isValid = false;
    } else {
      setContactErr("");
    }

    if (lname.length < 3) {
      setLnameErr("Last Name must be at least 3 characters long");
      isValid = false;
    } else {
      setLnameErr("");
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailErr("Invalid email");
      isValid = false;
    } else {
      setEmailErr("");
    }

    if (password.length < 8) {
      setPassErr("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPassErr("");
    }
    if (password !== "" && confPass !== password) {
      setConfPassErr("Passwords musts match");
      isValid = false;
    } else {
      setConfPassErr("");
    }
    if (!dob) {
      setDobErr("Enter date of birth");
      isValid = false;
    } else {
      setDobErr("");
    }

    if (address.length < 10) {
      setAddErr("Address must be at least 10 characters long");
      isValid = false;
    } else {
      setAddErr("");
    }

    if (!terms) {
      setTermErr("Please check the terms and conditions");
      isValid = false;
    } else {
      setTermErr("");
    }

    if (isValid) {
      alert("Form submit successful !!");
    }
  };

  return (
    <div className="p-5 mt-5 mainDiv">
      <label htmlFor="fname">First Name:</label>
      <input
        type="text"
        id="fname"
        onChange={handleFname}
        value={fname}
        className="form-control mb-3"
      />
      {fnameErr && <p className="text-danger">{fnameErr}</p>}
      <label htmlFor="lname">Last Name:</label>
      <input
        type="text"
        id="lname"
        onChange={handleLname}
        value={lname}
        className="form-control mb-3"
      />
      {lnameErr && <p className="text-danger">{lnameErr}</p>}

      <div className="mb-3">
        <label className="form-label d-block">Gender:</label>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={handleGender}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={handleGender}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="others"
            value="others"
            checked={gender === "others"}
            onChange={handleGender}
          />
          <label className="form-check-label" htmlFor="others">
            Others
          </label>
        </div>

        {genErr && <p className="text-danger mt-1">{genErr}</p>}
      </div>

      <label htmlFor="contact">Contact:</label>
      <input
        type="text"
        id="contact"
        onChange={handleContact}
        value={contact}
        className="form-control mb-3"
      />
      {contactErr && <p className="text-danger">{contactErr}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        onChange={handleEmail}
        value={email}
        className="form-control mb-3"
      />
      {emailErr && <p className="text-danger">{emailErr}</p>}
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        onChange={handleDob}
        value={dob}
        className="form-control mb-3"
      />
      {dobErr && <p className="text-danger">{dobErr}</p>}
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        onChange={handlePassword}
        value={password}
        className="form-control mb-3"
      />
      {passErr && <p className="text-danger">{passErr}</p>}
      <label htmlFor="confpassword">Confirm Password:</label>
      <input
        type="text"
        id="confpassword"
        onChange={handleConfPass}
        value={confPass}
        className="form-control mb-3"
      />
      {confPassErr && <p className="text-danger">{confPassErr}</p>}
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        onChange={handleCity}
        value={city}
        className="form-control mb-3"
      />
      {cityErr && <p className="text-danger">{cityErr}</p>}
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        onChange={handleAddress}
        value={address}
        className="form-control mb-3"
      />
      {addErr && <p className="text-danger">{addErr}</p>}
      <div className="d-block">
        <input
          type="checkbox"
          checked={terms}
          onClick={handleTerms}
          id="terms"
        />
        <label htmlFor="terms" className="">
          I accept the terms and conditions
        </label>
      </div>
      {termErr && <p className="text-danger">{termErr}</p>}
      <button
        onClick={handleSubmit}
        className="btn btn-dark text-white my-3 block text-center"
      >
        Submit
      </button>
    </div>
  );
};

export default RegistrationForm;
