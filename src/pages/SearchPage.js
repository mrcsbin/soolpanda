import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCardCategory from "../components/ProductCardCategory";
import axios from "axios";
import "../css/ProductCard.css";

const ItemList = ({ search }) => {
  const [alcohol, setAlcohol] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3002/product");
        console.log(res.data);
        setAlcohol(
          res.data.filter(
            (x) =>
              x.product_name.includes("Props that we get from search input") ||
              x.product_writer.includes(
                "Props that we get from search input"
              ) ||
              x.product_name.includes("고도리") //일단 고도리만 나오게 함  Props 받을시 삭제 가능
          )
        );

        console.log(alcohol);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, ["Props that we get from search input"]);

  // 대기 중일 때
  if (loading) {
    return <>대기 중...</>;
  }
  // 아직 값이 설정되지 않았을 때
  if (!alcohol) {
    return null;
  }

  // 값이 유효할 때
  return <ProductCardCategory key={alcohol.product_num} alcohol={alcohol} />;
};

const SearchPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const search = params.search || "all";

  return <ItemList search={search} />;
};

// function ss(){
//    x.product_name.indexof('Props that we get from search input') >=
//                 0 ||
//   x.product_writer.indexof('Props that we get from search input') >=

// }

export default SearchPage;
