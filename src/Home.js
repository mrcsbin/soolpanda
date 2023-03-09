import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <banner
        style={{
          border: "3px solid black",
          width: "100%",
          height: "300px",
          padding: "30px 30px",
          display: "block",
        }}
      ></banner>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
      <ul>
        <li>
          <Link to="/product/0">상품1</Link>
        </li>
        <li>
          <Link to="/product/1">상품2</Link>
        </li>
        <li>
          <Link to="/product/2">상품3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
