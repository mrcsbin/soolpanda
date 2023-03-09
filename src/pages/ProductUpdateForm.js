import { useState } from "react";
import "../css/ProductForm.css";
import Input from "../components/Input";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

const ProductUpdateForm = (props) => {
  const now = new Date();
  function getDateOnly(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0~11 값을 반환하므로 1을 더해줍니다.
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  const location = useLocation();
  const [productData, setProductData] = useState({
    product_name: location.state.productData.product_name || "",
    product_mainimage: location.state.productData.product_mainimage,
    product_introduction: location.state.productData.product_introduction || "",
    product_info: location.state.productData.product_info || [],
    product_info: location.state.productData.product_info || "",
    product_category: location.state.productData.product_category || "",
    product_percentage: location.state.productData.product_percentage || "",
    product_volume: location.state.productData.product_volume || "",
    product_price: location.state.productData.product_price || "",
    product_detailexp: location.state.productData.product_detailexp || "",
    product_stock: location.state.productData.product_stock || "",
  });

  const updateProduct = (productId, updatedProductData) => {
    axios
      .put(`http://localhost:8000/product/${productId}`, updatedProductData)
      .then((response) => {
        console.log(productData);
      })
      .catch((error) => {});
  };

  const handleSubmit = () => {
    console.log(productData);
    updateProduct(location.state.productData.id, productData);
  };

  const saveDataHandler = (data) => {
    setProductData({
      ...productData,
      product_info: data,
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
            <ImageUploader
              maxFiles={5}
              onSaveData={saveDataHandler}
              images={productData.product_info}
            />
          </div>
        </div>

        {/* 기본정보 > 입력 */}
        <div>
          {/* 상품명 */}
          <div className="product_name">
            <span>상품명 </span>
            <Input
              name={"product_name"}
              value={productData.product_name}
              onSaveProductData={productDataHandler}
            />
          </div>

          {/* 상품 소개 */}
          <div className="productInfo">
            <span>소개 </span>
            <Input
              name={"product_introduction"}
              value={productData.product_introduction}
              onSaveProductData={productDataHandler}
            />
          </div>

          {/* 주종 선택 */}
          <div className="product_category">
            <span>주종 </span>
            <select
              name="product_category"
              value={productData.product_category}
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
              value={productData.product_percentage}
              onSaveProductData={productDataHandler}
            />
            <span> %</span>
          </div>

          {/* 용량 */}
          <div className="productCapacity">
            <span>용량 </span>
            <Input
              name="product_volume"
              value={productData.product_volume}
              onSaveProductData={productDataHandler}
            />
            <span> ml</span>
          </div>

          {/* 가격 */}
          <div className="productPrice">
            <span>가격 </span>
            <Input
              name="product_price"
              value={productData.product_price}
              onSaveProductData={productDataHandler}
            />
            <span> 원</span>
          </div>

          {/* 재고 */}
          <div className="productInventory">
            <span>재고 </span>
            <Input
              name="product_stock"
              value={productData.product_stock}
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
        <div className="test">
          {/* <ImageUploader /> */}
          <ImageUploader maxFiles={5} onSaveData={saveDataHandler} />
        </div>
        <div>
          <textarea
            name="product_detailexp"
            onSaveProductData={productDataHandler}
          />
        </div>

        {/* 저장 */}
        <div>
          <button className="submit-button" onClick={handleSubmit}>
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdateForm;
