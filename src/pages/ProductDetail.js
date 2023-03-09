import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import axios from "axios";

const ProductDetail = () => {
  // 주소 props로 제품명이나 제품 넘버를 전달 받고, DB에서 검색하여 화면에 뿌려주는 방식으로 설계를 해볼 생각입니다.

  const params = useParams(); //
  const id = [params.id];
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getList = () => {
    axios
      .get("http://localhost:8000/product", {})
      .then((res) => {
        //server.js의 응답결과를 res에 저장합니다.
        console.log("getlist 리스폰스 ==>", res);
        const { data } = res; // data = res.data속성
        setData(data[id]);
        console.log("getlist 데이터==>", data[id]);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteList = () => {
    axios
      .delete("http://localhost:8000/product/")
      .then((res) => {
        console.log("삭제리스트 리스폰스", res);
        navigate("/");
      })
      .catch((error) => {
        console.log("삭제할 데이터가 존재하지 않습니다.", error);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  console.log("배열=", data);

  const {
    product_name,
    product_category,
    product_percentage,
    product_volume,
    product_price,
    product_mainimage,
  } = data;

  const [number, setnumber] = useState(1);

  const onClick = () => {
    setnumber(number + 1);
  };

  const onClick2 = () => {
    if (number > 1) {
      setnumber(number - 1);
    } else {
      alert("갯수는 0이하로 입력할 수 없습니다.");
    }
  };

  const pprice = (number * product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = (1 * product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div id="wrap">
      <main className="left">
        <div className="section">
          <input type="radio" name="slide" id="slide01" checked />
          <input type="radio" name="slide" id="slide02" />
          <input type="radio" name="slide" id="slide03" />
          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <span>
                  <label for="slide03" className="left"></label>
                  <img
                    src={product_mainimage}
                    alt="이미지1"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/400")
                    }
                  />
                  <label for="slide02" className="right"></label>
                </span>
              </li>
              <li>
                <span>
                  <label for="slide01" className="left"></label>
                  <img
                    src={product_mainimage}
                    alt="이미지2"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/400")
                    }
                  />
                  <label for="slide03" className="right"></label>
                </span>
              </li>
              <li>
                <span>
                  <label for="slide02" className="left"></label>
                  <img
                    src={product_mainimage}
                    alt="이미지3"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/400")
                    }
                  />
                  <label for="slide01" className="right"></label>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h3>상세설명</h3>
        <div>
          <div>
            <img
              src={product_mainimage}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={product_mainimage}
              alt="이미지2"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={product_mainimage}
              alt="이미지3"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={product_mainimage}
              alt="이미지4"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={product_mainimage}
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
          <h2 className="name">{product_name}</h2>
          <p className="coment">부설명</p>
        </div>
        <ul>
          <li className="type">주종&nbsp;:&nbsp;{product_category}</li>
          <li className="percent">도수&nbsp;:&nbsp;{product_percentage}%</li>
          <li className="capacity">용량&nbsp;:&nbsp;{product_volume}ml</li>
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
        <button className="btn del" onClick={deleteList}>
          삭제하기
        </button>
      </aside>
    </div>
  );
};

export default ProductDetail;
