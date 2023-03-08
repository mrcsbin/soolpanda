import React, { useState } from "react";
//import { useParams } from "react-router-dom";

const data = {
  product1: {
    name: "안동탁주",
    price: "15000",
    content:
      "설명은 DB연동하면 거기서 받아오는 걸로 하겠습니다 우선은 더미 데이터로 해볼게요",
  },
  product2: {
    name: "매실주",
    price: "1250",
    content:
      "설명은 DB연동하면 거기서 받아오는 걸로 하겠습니다 우선은 더미 데이터로 해볼게요",
  },
};

const ProductDetail = () => {
  // 주소 props로 제품명이나 제품 넘버를 전달 받고, DB에서 검색하여 화면에 뿌려주는 방식으로 설계를 해볼 생각입니다.
  //const params = useParams();

  const product = data.product1;

  const [number, setnumber] = useState(0);
  const onClick = () => {
    setnumber(number + 1);
  };
  const onClick2 = () => {
    setnumber(number - 1);
  };

  const pprice = number * product.price;

  return (
    <div style={{ margin: "0 auto", width: "1100px" }}>
      <div
        id="leftSide"
        style={{
          float: "left",
          width: "70%",
          border: "3px solid black",
          display: "block",
        }}
      >
        {product.name}
        {product.price}
      </div>
      <div
        id="rightSide"
        style={{
          float: "right",
          width: "25%",
          border: "3px solid black",
          height: "500px",
        }}
      >
        <button onClick={onClick2}>-</button>
        {number}
        <button onClick={onClick}>+</button>
        {pprice}
      </div>
    </div>
  );
};

export default ProductDetail;
