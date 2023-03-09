import { useState } from "react";
import "../css/ProductForm.css";
import Input from "../components/Input";
import ImageUploader from "../components/ImageUploader.js";
import axios from "axios";

const ProductForm = () => {
  const now = new Date();

  function getDateOnly(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0~11 값을 반환하므로 1을 더해줍니다.
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }
  const [productData, setProductData] = useState({
    product_introduction: "",
    product_date: getDateOnly(now),
    product_mainimage: "",
    product_info: [],
    product_name: "",
    product_category: "",
    product_percentage: "",
    product_volume: "",
    product_price: "",
    product_stock: "",
    product_detailexp: "",
  });

  const handleSubmit = () => {
    console.log(productData);
    axios
      .post("http://localhost:8000/product", productData)
      .then(function (response) {})
      .catch(function (error) {})
      .then(function () {});
  };

  const saveDataHandler = (data) => {
    console.log(data);
    setProductData({
      ...productData,
      product_info: data,
    });
  };
  const savemainDataHandler = (data) => {
    console.log(data);
    setProductData({
      ...productData,
      product_mainimage: data,
    });
  };

  const productDataHandler = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="InputForm">
      {/* 윗단 */}
      <div className="up">
        {/* 상품등록 */}
        <div className="productHeader">
          <p>상품등록</p>
        </div>

        {/* 기본정보 > 상품이미지 */}
        <div>
          <div>{/* 기본 정보 빼버릴까 */}</div>

          {/* 상품 이미지 & 아래 설명 */}
          <div>
            <p>상품 이미지</p>
            <p>상품 이미지 설명 어쩌고저쩌고</p>
            <span>대표사진 골라</span>
          </div>

          {/* 이미지 등록 */}
          <div className="test">
            {/* <ImageUploader /> */}
            <ImageUploader maxFiles={1} onSaveData={savemainDataHandler} />
          </div>
        </div>

        {/* 기본정보 > 입력 */}
        <div>
          {/* 상품명 */}
          <div className="product_name">
            <span>상품명 </span>
            <Input
              name={"product_name"}
              onSaveProductData={productDataHandler}
            />
          </div>

          {/* 상품 소개 */}
          <div className="productInfo">
            <span>소개 </span>
            <Input
              name={"product_introduction"}
              onSaveProductData={productDataHandler}
            />
          </div>

          {/* 주종 선택 */}
          <div className="product_category">
            <span>주종 </span>
            <select
              name="product_category"
              // value={productData.product_category}
              onChange={productDataHandler}
            >
              <option>선택해주세요</option>
              <option value="탁주">탁주</option>
              <option value="증류주">증류주</option>
              <option value="과실주">과실주</option>
            </select>
          </div>

          {/* 도수 */}
          <div className="productAlcohol">
            <span>도수 </span>
            <Input
              name="product_percentage"
              onSaveProductData={productDataHandler}
            />
            <span> %</span>
          </div>

          {/* 용량 */}
          <div className="productCapacity">
            <span>용량 </span>
            <Input
              name="product_volume"
              onSaveProductData={productDataHandler}
            />
            <span> ml</span>
          </div>

          {/* 가격 */}
          <div className="productPrice">
            <span>가격 </span>
            <Input
              name="product_price"
              onSaveProductData={productDataHandler}
            />
            <span> 원</span>
          </div>

          {/* 재고 */}
          <div className="productInventory">
            <span>재고 </span>
            <Input
              name="product_stock"
              onSaveProductData={productDataHandler}
            />
            <span> 개</span>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />

      {/* 아랫단 */}
      <div>
        <div className="test">
          {/* <ImageUploader /> */}
          <ImageUploader maxFiles={5} onSaveData={saveDataHandler} />
        </div>
        {/* 상품 상세? 소개?  */}
        <div>
          <Input
            type="textarea"
            name="product_detailexp"
            onSaveProductData={productDataHandler}
          />

          {/* <Input
            label="Name"
            name="name"
            value={1}
            onSaveProductData={productDataHandler}
            style={{ width: "300px", height: "50px" }}
          /> */}
        </div>

        {/* 저장 */}
        <div>
          <button className="submit-button" onClick={handleSubmit}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
