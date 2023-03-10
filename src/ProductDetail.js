import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailPage from "./DetailPage";

const DetailItem = ({ product_num }) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8000/product`);
        setItem(res.data.find((x) => x.product_number == product_num));
        console.log(item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [product_num]);

  // 대기 중일 때
  if (loading) {
    return <div />;
  }
  // 아직 값이 설정되지 않았을 때
  if (!item) {
    return null;
  }

  // 값이 유효할 때
  return <DetailPage item={item} />;
};

const ProductDetail = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const num = params.id;

  return <DetailItem product_num={num} />;
};

export default ProductDetail;
