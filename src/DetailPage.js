import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DetailPage = ({ item }) => {
  console.log(item);
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/product/${item.product_number}`)
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const [number, setNumber] = useState(1);

  const onClick = () => {
    setNumber(number + 1);
  };

  const onClick2 = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      alert("갯수는 0이하로 입력할 수 없습니다.");
    }
  };

  const pprice = (number * item.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = (1 * item.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div id="wrap">
      <main className="left">
        <img
          src={item.product_mainimage}
          alt="이미지1"
          onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
        />

        <br />
        <br />
        <h3>상세설명</h3>
        <div>
          <div>
            <img
              src={item.product_mainimage}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={item.product_mainimage}
              alt="이미지2"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={item.product_mainimage}
              alt="이미지3"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={item.product_mainimage}
              alt="이미지4"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={item.product_mainimage}
              alt="이미지5"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란입니다.
        </div>
      </main>
      <aside className="right">
        <div class="title">
          <h2 className="name">{item.product_name}</h2>
          <p className="coment">부설명{item.product_introduction}</p>
        </div>
        <ul>
          <li className="type">주종&nbsp;:&nbsp;{item.product_category}</li>
          <li className="percent">
            도수&nbsp;:&nbsp;{item.product_percentage}%
          </li>
          <li className="capacity">용량&nbsp;:&nbsp;{item.product_volume}ml</li>
          <li className="price">{formattedNumber}원</li>
        </ul>
        <div className="btnOpt">
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
          총 상품금액&nbsp;&nbsp;{number}개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sum">{pprice}원</span>
        </p>
        {/* <button className="buy">구매하기</button> */}

        <button className="btn up">수정하기</button>
        <button className="btn del">
          <Link to={`/`} onClick={deleteHandler}>
            삭제하기
          </Link>
        </button>
      </aside>
    </div>
  );
};

export default DetailPage;
