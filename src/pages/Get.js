import React, { useState } from "react";
import axios from "axios";

const Get = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    product_introduction: "",
    product_info: [],
    product_category: "",
    product_percentage: "",
    product_volume: "",
    product_price: "",
    product_stock: "",
  });

  const onClickHandler = () => {
    axios
      .get("http://localhost:8000/product/12")
      .then((Response) => {
        console.log(Response);
        console.log(Response.data);
        console.log("ProductData ID" + Response.data.product_name);
        setProductData(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <p>Get</p>
      <button onClick={onClickHandler}>Get</button>

      <p>{productData.product_name}</p>
      <img src={productData.product_info} alt="Success!" />
    </div>
  );
};

export default Get;
