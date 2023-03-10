import { useState, useEffect } from "react";
import "../css/ProductCard.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }
  var productprice = addComma(props.alcohol.product_price);
  return (
    <NavLink
      className="Cardblock"
      to={`/products/${props.alcohol.id}`}
      state={{ props }}
    >
      <div className="Imagebox">
        <img
          className="Productimage"
          src={props.alcohol.product_mainimage}
          alt=""
        />
      </div>
      <div className="Pname">{props.alcohol.product_name}</div>
      <div className="Pintro">{props.alcohol.product_introduction}</div>
      <div className="Pprice">{productprice} 원</div>
    </NavLink>
  );
};

const ProductCardCategory = (props) => {
  // 전체 데이터 중 어디까지 잘라서 보여줄지 - 함수
  const [countMore, setCountMore] = useState(8); //배열 중 몇번째까지
  const [sliced, setSliced] = useState([]); //잘라서 저장
  /* Countmore이 onClick 안에서 바뀌면 재렌더링 됨 */
  useEffect(() => {
    setSliced(props.alcohol.slice(0, countMore));
  }, [countMore]);

  return (
    <>
      <div className="CardboxC">
        {sliced.map((alcohol) => {
          return <Card alcohol={alcohol} />;
        })}
        <button
          className="Morebutton"
          style={{
            visibility:
              countMore >= props.alcohol.length ? "hidden" : "visible",
          }}
          onClick={() => {
            ///클릭할때마다 8개씩 더 나오게 함
            setCountMore(countMore + 8);
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
};

export default ProductCardCategory;
