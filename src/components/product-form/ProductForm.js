import { useState } from "react";
import "./ProductForm.css";
import Input from "./Input";
import ImageUploader from "./ImageUploader.js";
// import ImageUploader2 from "./ImageUploader.js";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    product_name: "product_name",
    product_introduction: "product_introduction",
    product_info: "product_info",
    product_category: "탁주",
    product_percentage: "product_percentage",
    product_volume: "product_volume",
    product_price: "product_price",
    product_stock: "product_stock",
  });

  const handleChangeState = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(productData);
    alert("저장 성공");
  };

  const saveDataHandler = (data) => {
    console.log(data);
  };

  const productDataHandler = (data) => {
    setProductData({
      ...productData,
      [data.name]: data.value,
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
            <ImageUploader onSaveData={saveDataHandler} />
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
              name={"product_info"}
              onSaveProductData={productDataHandler}
            />
          </div>

          {/* 주종 선택 */}
          <div className="product_category">
            <span>주종 </span>
            <select
              name="product_category"
              value={productData.product_category}
              onChange={handleChangeState}
            >
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
        {/* 상품 상세? 소개?  */}
        <div>
          <p>상품 상세</p>
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
