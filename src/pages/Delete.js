import React from "react";
import axios from "axios";

const Delete = () => {
  const onClickHandler = () => {
    axios
      .delete("http://localhost:8000/product?")
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <p>Delete</p>
      <button onClick={onClickHandler}>Delete</button>
    </div>
  );
};

export default Delete;
