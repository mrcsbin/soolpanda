import React from "react";
import axios from "axios";

const Put = () => {
  const onClickHandler = () => {
    axios
      .put("http://localhost:8000/product/")
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <p>Put</p>
      <button onClick={onClickHandler}>Put</button>
    </div>
  );
};

export default Put;
