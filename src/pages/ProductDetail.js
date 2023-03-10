import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailPage from "../components/DetailPage";

const DetailItem = ({ product_num }) => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8000/product`);
        setProductData(res.data.find((x) => x.id === Number(product_num)));
        console.log("시작");
        console.log(res.data.find((x) => x.id === Number(product_num)));
        console.log(typeof res.data[2].id);
        console.log(typeof product_num);
        console.log(product_num);
        console.log("끝");
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
  if (!productData) {
    return null;
  }

  // 값이 유효할 때
  return <DetailPage productData={productData} />;
};

const ProductDetail = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const num = params.id;

  return <DetailItem product_num={num} />;
};

export default ProductDetail;
