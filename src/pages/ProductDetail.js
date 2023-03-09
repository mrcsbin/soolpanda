import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import "../css/ProductDetail.css";
import axios from "axios";

const ProductDetail = (props) => {
  // 주소 props로 제품명이나 제품 넘버를 전달 받고, DB에서 검색하여 화면에 뿌려주는 방식으로 설계를 해볼 생각입니다.

  const location = useLocation();
  const [productData, setProductData] = useState({
    product_name: location.state.props.alcohol.product_name || "",
    product_introduction:
      location.state.props.alcohol.product_introduction || "",
    product_mainimage: location.state.props.alcohol.product_mainimage || "",
    product_category: location.state.props.alcohol.product_category || "",
    product_percentage: location.state.props.alcohol.product_percentage || "",
    product_volume: location.state.props.alcohol.product_volume || "",
    product_price: location.state.props.alcohol.product_price || "",
    product_stock: location.state.props.alcohol.product_stock || "",
  });

  const navigate = useNavigate();

  const deleteHandler = () => {
    axios
      .delete(
        `http://localhost:8000/product/${location.state.props.alcohol.id}`
      )
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  console.log(productData.product_mainimage);
  console.log(productData.product_mainimage);
  console.log(productData.product_mainimage);
  console.log(productData.product_mainimage[0].base64Image);

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

  const pprice = (number * productData.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = (1 * productData.product_price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div id="wrap">
      <main className="left">
        <img
          src={productData.product_mainimage[0].base64Image}
          alt="이미지1"
          onError={(e) => (e.target.src = "https://via.placeholder.com/400")}
        />

        <br />
        <br />
        <h3>상세설명</h3>
        <div>
          <div>
            <img
              src={productData.product_mainimage}
              alt="이미지1"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          <p>{productData.product_detailexp}</p>
          <div>
            <img
              src={productData.product_mainimage}
              alt="이미지2"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={productData.product_mainimage}
              alt="이미지3"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={productData.product_mainimage}
              alt="이미지4"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400")
              }
            />
          </div>
          제품 설명란 입니다.
          <div>
            <img
              src={productData.product_mainimage}
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
          <h2 className="name">{productData.product_name}</h2>
          <p className="coment">부설명{productData.product_introduction}</p>
        </div>
        <ul>
          <li className="type">
            주종&nbsp;:&nbsp;{productData.product_category}
          </li>
          <li className="percent">
            도수&nbsp;:&nbsp;{productData.product_percentage}%
          </li>
          <li className="capacity">
            용량&nbsp;:&nbsp;{productData.product_volume}ml
          </li>
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

        <Link to={`/update`} state={{ productData }}>
          <button className="btn up">수정하기</button>
        </Link>

        <Link to={`/`}>
          <button className="btn del" onClick={deleteHandler}>
            삭제하기
          </button>
        </Link>
      </aside>
    </div>
  );
};

export default ProductDetail;
