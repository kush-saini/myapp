import React, { useState } from "react";

const InRadio = () => {
  const [gender, setGender] = useState("male");
  const changeRadio = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="container my-5 pt-5">
      <input
        type="radio"
        onChange={changeRadio}
        name="gender"
        value="male"
        checked={gender == "male"}
        className="mx-2"
      />{" "}
      Male
      <input
        type="radio"
        className="mx-2"
        name="gender"
        onChange={changeRadio}
        value="female"
        checked={gender == "female"}
      />{" "}
      Female
      <input
        type="radio"
        className="mx-2"
        name="gender"
        onChange={changeRadio}
        value="others"
        checked={gender == "others"}
      />{" "}
      Others
    </div>
  );
};

export default InRadio;
