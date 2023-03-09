import { useState, useEffect } from "react";
import styled from "styled-components";
import "./ProductCard.css";

const Card = (props) => {
  return (
    <div className="Cardblock">
      <div className="Imagebox">
        <img className="Productimage" src={props.alcohol.product_mainimage} />
      </div>
      <div className="Pname">{props.alcohol.product_name}</div>
      <p>{props.alcohol.product_introduction}</p>
      <p>{props.alcohol.product_price}</p>
    </div>
  );
};

const ProductCardMain = (props) => {
  // 전체 데이터 중 어디까지 잘라서 보여줄지 - 함수
  const [countMore, setCountMore] = useState(0); //배열 중 몇번째까지
  const [sliced, setSliced] = useState([]); //잘라서 저장

  /* Countmore이 onClick 안에서 바뀌면 재렌더링 됨 */
  useEffect(() => {
    setSliced(props.alcohol.slice(0, countMore + 4));
  }, [countMore]);

  /* 처음에 렌더링 될때 8개 가져옴 */
  useEffect(() => {
    setSliced(props.alcohol.slice(0, countMore + 4));
  }, []);

  return (
    <div className="Cardbox">
      {sliced.map((alcohol) => {
        return <Card alcohol={alcohol} />;
      })}
      <button
        className="Morebutton"
        style={{
          visibility: countMore >= 16 ? "hidden" : "visible",
        }}
        onClick={() => {
          ///클릭할때마다 8개씩 더 나오게 함
          setCountMore(countMore + 4);
        }}
      >
        더보기
      </button>
    </div>
  );
};

export default ProductCardMain;
