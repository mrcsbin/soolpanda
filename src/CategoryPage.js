import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import ProductCardCartegory from "./ProductCardCategory";
import axios from "axios";

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ItemList = ({ category }) => {
  const [alcohol, setAlcohol] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3002/product");
        setAlcohol(res.data.filter((x) => x.product_category == category));
        console.log(alcohol);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <ItemListBlock>대기 중...</ItemListBlock>;
  }
  // 아직 값이 설정되지 않았을 때
  if (!alcohol) {
    return null;
  }

  // 값이 유효할 때
  return (
    <ItemListBlock>
      <ProductCardCartegory key={alcohol.product_num} alcohol={alcohol} />
      {console.log(alcohol)}
    </ItemListBlock>
  );
};

const CategoryPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || "all";

  return <ItemList category={category} />;
};

export default CategoryPage;
