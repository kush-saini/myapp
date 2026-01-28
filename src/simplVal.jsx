import React, { useState } from "react";

const SimplVal = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [flag, setFlag] = useState(false);
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setFlag(true);
  };
  return (
    <div className="pt-5">
      <div className="mx-5 p-5">
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleData}
            name="name"
            type="text"
            className="form-control"
            id="name"
          />
          {flag && data.name.length < 2 && (
            <p className="text-danger py-2">
              Name should be atleast 2 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            onChange={handleData}
            name="email"
            type="text"
            className="form-control"
            id="email"
          />
          {flag && data.email.length < 7 && (
            <p className="text-danger py-2">
              Name should be atleast 7 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label for="pass" className="form-label">
            Password
          </label>
          <input
            onChange={handleData}
            name="password"
            type="text"
            className="form-control"
            id="pass"
          />
          {flag && data.password.length < 8 && (
            <p className="text-danger py-2">
              Name should be atleast 8 characters
            </p>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SimplVal;
