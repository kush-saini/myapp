import React, { useState } from "react";

const MyForm2 = () => {
  // firstname,lastname, password, address, terms, email
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    terms: false,
    password: "",
    address: "",
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    termErr: "",
    passErr: "",
    addErr: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const termsHandler = () => {
    setData({ ...data, terms: !data.terms });
  };
  //   const handleSubmit = () => {
  //     let isValid = true;
  //     if (data.fname.length <= 2) {
  //       setData({ ...data, fnameErr: "Name must be atleast 3 characters long" });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, fnameErr: "" });
  //     }
  //     if (data.password.length <= 8) {
  //       setData({
  //         ...data,
  //         passErr: "Password must be atleast 8 characters long",
  //       });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, passErr: "" });
  //     }
  //     if (data.address.length <= 8) {
  //       setData({
  //         ...data,
  //         addErr: "Address must be atleast 10 characters long",
  //       });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, addErr: "" });
  //     }
  //     if (data.lname.length <= 2) {
  //       setData({ ...data, lnameErr: "Name must be atleast 3 characters long" });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, lnameErr: "" });
  //     }
  //     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
  //       setData({ ...data, emailErr: "Invalid email" });
  //       isValid = false;
  //     } else if (data.email.length < 7) {
  //       setData({ ...data, emailErr: "Email must be atleast 7 characters long" });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, emailErr: "" });
  //     }
  //     if (!data.terms) {
  //       setData({ ...data, termErr: "Please check the terms and conditions" });
  //       isValid = false;
  //     } else {
  //       setData({ ...data, termErr: "" });
  //     }
  //     if (isValid) {
  //       alert("Form submit successfull !!");
  //     }
  //   };
  const handleSubmit = () => {
    let isValid = true;
    let errors = {};

    if (data.fname.length < 3) {
      errors.fnameErr = "First Name must be at least 3 characters long";
      isValid = false;
    }

    if (data.lname.length < 3) {
      errors.lnameErr = "Last Name must be at least 3 characters long";
      isValid = false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.emailErr = "Invalid email";
      isValid = false;
    }

    if (data.password.length < 8) {
      errors.passErr = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (data.address.length < 10) {
      errors.addErr = "Address must be at least 10 characters long";
      isValid = false;
    }

    if (!data.terms) {
      errors.termErr = "Please check the terms and conditions";
      isValid = false;
    }

    setData({
      ...data,
      fnameErr: errors.fnameErr || "",
      lnameErr: errors.lnameErr || "",
      emailErr: errors.emailErr || "",
      passErr: errors.passErr || "",
      addErr: errors.addErr || "",
      termErr: errors.termErr || "",
    });

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
        name="fname"
        onChange={handleChange}
        value={data.fname}
        className="form-control mb-3"
      />
      {data.fnameErr && <p className="text-danger">{data.fnameErr}</p>}
      <label htmlFor="lname">Last Name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        onChange={handleChange}
        value={data.lname}
        className="form-control mb-3"
      />
      {data.lnameErr && <p className="text-danger">{data.lnameErr}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={data.email}
        className="form-control mb-3"
      />
      {data.emailErr && <p className="text-danger">{data.emailErr}</p>}
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        onChange={handleChange}
        value={data.password}
        className="form-control mb-3"
      />
      {data.passErr && <p className="text-danger">{data.passErr}</p>}
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleChange}
        value={data.address}
        className="form-control mb-3"
      />
      {data.addErr && <p className="text-danger">{data.addErr}</p>}
      <div className="d-block">
        <input
          type="checkbox"
          checked={data.terms}
          onClick={termsHandler}
          id="terms"
        />
        <label htmlFor="terms" className="">
          I accept the terms and conditions
        </label>
      </div>
      {data.termErr && <p className="text-danger">{data.termErr}</p>}
      <button
        onClick={handleSubmit}
        className="btn btn-dark text-white my-3 block text-center"
      >
        Submit
      </button>
    </div>
  );
};

export default MyForm2;
