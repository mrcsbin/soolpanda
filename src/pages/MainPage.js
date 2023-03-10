import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCardMain from "../components/ProductCardMain";
import axios from "axios";
import "../css/MainPage.css";

const Carousel = styled.div`
  background: url(https://d38cxpfv0ljg7q.cloudfront.net/content_images/contents_images-1663250259447-2.jpg);
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100%;
  margin: 0 auto;
`;

const ThreeBox = () => {
  return (
    <div className="container">
      <ul>
        <li className="box">
          <a href="#" className="type">
            <img></img>
          </a>
          <p>탁주</p>
        </li>
        <li class="box">
          <a href="#" className="type">
            <img></img>
          </a>
          <p>증류주</p>
        </li>
        <li class="box">
          <a href="#" className="type">
            <img></img>
          </a>
          <p>과실주</p>
        </li>
      </ul>
    </div>
  );
};

const MainPage = () => {
  const [alcohol, setAlcohol] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/product");
        setAlcohol(res.data);
        console.log(alcohol);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div />;
  }
  // 아직 값이 설정되지 않았을 때
  if (!alcohol) {
    return null;
  }

  // 값이 유효할 때
  return (
    <box>
      <Carousel />
      <ThreeBox />
      <ProductCardMain alcohol={alcohol} />
    </box>
  );
};

export default MainPage;
