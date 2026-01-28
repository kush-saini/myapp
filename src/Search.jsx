import React, { useState } from "react";

const Search = () => {
  const [names, setNames] = useState([
    "Aarav",
    "Ananya",
    "Rohit",
    "Priya",
    "Vikram",
    "Neha",
    "Rahul",
    "Pooja",
    "Amit",
    "Kavya",
    "Suresh",
    "Meera",
    "Arjun",
    "Sneha",
    "Karan",
    "Riya",
    "Manish",
    "Nisha",
    "Aditya",
    "Shreya",
  ]);
  const [filNames, setFilNames] = useState([...names]);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setNames((prev) => prev);
    }
    const dummyArray = [...names].filter((name) =>
      name.includes(e.target.value),
    );
    setFilNames(dummyArray);
  };

  return (
    <div className="p-5 align-center container mt-5">
      <h1>Enter your search query</h1>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      {filNames.map((name) => {
        return <h3>{name}</h3>;
      })}
    </div>
  );
};

export default Search;
