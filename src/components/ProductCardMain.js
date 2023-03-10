import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/ProductCard.css";

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

const ProductCardMain = (props) => {
  /* 전체 데이터 중 어디까지 잘라서 보여줄지 - 신상품 - 기본함수 */
  const [countMoreNew, setCountMoreNew] = useState(4); //배열 중 몇번째까지
  const [sliceNew, setSliceNew] = useState(props.alcohol.slice(0, 4)); //처음 8개 잘라서 저장
  /* CountmoreNew가 onClick 안에서 바뀌면 재렌더링 됨 */
  useEffect(() => {
    setSliceNew(props.alcohol.slice(0, countMoreNew));
  }, [countMoreNew]);

  /* 위와 동일함 - only difference : 인기상품용 */
  const [countMoreFavr, setCountMoreFavr] = useState(4);
  const [sliceFavr, setSliceFavr] = useState([]);
  const sorted = [...props.alcohol]; //원본 배열 손상 X (deep copy 함)
  useEffect(() => {
    ///낮은 가격순으로 정렬함
    sorted.sort((a, b) => {
      return a.product_price - b.product_price;
    });
    setSliceFavr(sorted.slice(0, countMoreFavr));
  }, [countMoreFavr]);

  const alcogollength = props.alcohol.length;
  return (
    <>
      <div className="Cardbox">
        <div className="cont">
          <p className="after new">
            이달의 신상품
            <br /> <span>NEW</span>{" "}
          </p>
          {sliceNew.map((alcohol) => {
            return <Card alcohol={alcohol} />;
          })}
        </div>
        <button
          className="Morebutton"
          style={{
            visibility:
              countMoreNew >= 8 || alcogollength <= 4 ? "hidden" : "visible",
          }}
          onClick={() => {
            ///클릭할때마다 8개씩 더 나오게 함
            setCountMoreNew(countMoreNew + 4);
          }}
        >
          더보기
        </button>
      </div>
      <div className="Cardbox">
        <div className="cont">
          <p className="after best">
            인기상품 <br /> <span>BEST</span>
          </p>
          {sliceFavr.map((alcohol) => {
            return <Card alcohol={alcohol} />;
          })}
        </div>
        <button
          className="Morebutton"
          style={{
            visibility:
              countMoreFavr >= 8 || alcogollength <= 4 ? "hidden" : "visible",
          }}
          onClick={() => {
            ///클릭할때마다 4개씩 더 나오게 함
            setCountMoreFavr(countMoreFavr + 4);
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
};

export default ProductCardMain;
