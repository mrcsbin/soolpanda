import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCardCartegory from "./ProductCardCategory";
import axios from "axios";

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
    return <div />;
  }
  // 아직 값이 설정되지 않았을 때
  if (!alcohol) {
    return null;
  }

  // 값이 유효할 때
  return <ProductCardCartegory key={alcohol.product_num} alcohol={alcohol} />;
};

const CategoryPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || "all";

  return <ItemList category={category} />;
};

export default CategoryPage;
