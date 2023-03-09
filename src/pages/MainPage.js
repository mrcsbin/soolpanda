import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCardMain from "../components/ProductCardMain";
import axios from "axios";
import "../css/ProductCard.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const Carousel = styled.div`
  background: url(https://d38cxpfv0ljg7q.cloudfront.net/content_images/contents_images-1663250259447-2.jpg);
  background-size: cover;
  background-position: center;
  height: 350px;
  width: 100vw;
  margin: 0 auto;
`;

const ThreeBox = () => {
  return (
    // <div className='"container'>
    <Col sm={4} style={{ width: "30%", marginleft: "300px" }}>
      <div
        style={{ color: "yellow", background: "yellow", height: "20px" }}
      ></div>
      <h4>탁주</h4>
    </Col>
    // </div>
  );
};

const MainPage = () => {
  const [alcohol, setAlcohol] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3002/product");
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
    return <>로딩중...</>;
  }
  // 아직 값이 설정되지 않았을 때
  if (!alcohol) {
    return null;
  }

  // 값이 유효할 때
  return (
    <box>
      <Carousel />
      <br />
      <ProductCardMain alcohol={alcohol} />
    </box>
  );
};

export default MainPage;