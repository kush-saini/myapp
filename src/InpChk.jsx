import React, { useState } from "react";

const InpChk = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container my-5">
      <input
        type="checkbox"
        onClick={() => setToggle(!toggle)}
        checked={toggle}
        className="mx-2 my-5"
      />{" "}
      Click me
      <div>{toggle && "value is visible now"}</div>
    </div>
  );
};

export default InpChk;
