import React, { useEffect, useState } from "react";
import "./App.css";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval running");
        setBar((prevBarValue) => {
          if (prevBarValue >= 100) {
            clearInterval(interval);
          }
          return Math.min(prevBarValue + 5, 100);
        });
    }, 400);
     return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="containers ml-2">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progresss"
      ></div>
    </div>
  );
};

export default ProgressBar;
