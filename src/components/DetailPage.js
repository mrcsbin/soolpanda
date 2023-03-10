import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/ProductDetail.css";

const DetailPage = ({ productData }) => {
  const deleteHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost:8000/product/${productData.id}`)
        .then((Response) => {
          console.log(Response);
          console.log("성공");
        })
        .catch((Error) => {
          console.log(Error);
        });
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  const [number, setNumber] = useState(1);

  const onClick = () => {
    setNumber(number + 1);
  };

  const onClick2 = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      alert("개수는 0개 이하로 입력할 수 없습니다.");
    }
  };

  const pprice = (number * productData.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = (1 * productData.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div id="wrap">
      <main className="DetailMain">
        <img
          src={productData.product_mainimage}
          alt="이미지1"
          onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
        />

        <br />
        <br />
        <h3>상세설명</h3>
        <div>
          <div>
            <img
              src={productData.product_subimage[0]}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          <p>{productData.product_detailexp}</p>
          <div>
            <img
              src={productData.product_subimage[1]}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          <div>
            <img
              src={productData.product_subimage[2]}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          <div>
            <img
              src={productData.product_subimage[3]}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          <div>
            <img
              src={productData.product_subimage[4]}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
        </div>
      </main>
      <aside className="DetailSide">
        <div className="title">
          <h2 className="name">{productData.product_name}</h2>
          <p className="coment">{productData.product_introduction}</p>
        </div>
        <ul>
          <li className="info type">
            주종&nbsp;:&nbsp;{productData.product_category}
          </li>
          <li className="info percent">
            도수&nbsp;:&nbsp;{productData.product_percentage}%
          </li>
          <li className="info capacity">
            용량&nbsp;:&nbsp;{productData.product_volume}ml
          </li>
          <li className="info price">{formattedNumber}원</li>
        </ul>
        <div className="info btnOpt">
          <button className="option btnl" onClick={onClick2}>
            -
          </button>
          <span>{number}</span>
          <button className="option btnr" onClick={onClick}>
            +
          </button>
        </div>
        <br />
        <br />
        <br />
        <p>
          총 상품금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{number}개&nbsp;&nbsp;&nbsp;
          <span className="sum">{pprice}원</span>
        </p>
        {/* <button className="buy">구매하기</button> */}

        <div className="btnWrap">
          <Link to={`/update`} state={{ productData }}>
            <button className="btn up">수정하기</button>
          </Link>
          <Link to={`/`}>
            <button className="btn del" onClick={deleteHandler}>
              삭제하기
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default DetailPage;
