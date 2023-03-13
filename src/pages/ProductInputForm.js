import { useState, useRef } from "react";
import "../css/ProductForm.css";
import Input from "../components/Input";
import ImageUploader from "../components/ImageUploader.js";
import axios from "axios";
import ScrollToTop from "../components/ScrollToTop";
const ProductForm = () => {
  const now = new Date();

  function getDateOnly(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0~11 값을 반환하므로 1을 더해줍니다.
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  const name = useRef(null);
  const introduction = useRef("");
  const category = useRef("");
  const percentage = useRef("");
  const volume = useRef("");
  const price = useRef("");
  const stock = useRef("");
  const detailexp = useRef("");
  const mainimage = useRef("");
  const subimage = useRef("");

  const [productData, setProductData] = useState({
    product_introduction: "",
    product_date: getDateOnly(now),
    product_mainimage: "",
    product_subimage: [],
    product_name: "",
    product_category: "",
    product_percentage: "",
    product_volume: "",
    product_price: "",
    product_stock: "",
    product_detailexp: "",
  });
  // const ref = useRef(null);
  const handleSubmit = () => {
    if (!productData.product_name) {
      window.alert("상품명을 작성하세요!");
      name.current.focus();
      return;
    }

    if (!productData.product_introduction) {
      window.alert("소개글을 작성하세요!");
      introduction.current.focus();
      return;
    }
    if (!productData.product_mainimage) {
      window.alert("메인 이미지를 업로드하세요!");
      mainimage.current.focus();
      return;
    }
    if (!productData.product_subimage) {
      window.alert("서브이미지를 업로드하세요!");
      subimage.current.focus();
      return;
    }

    if (!productData.product_category) {
      window.alert("주종을 선택하세요!");
      category.current.focus();
      return;
    }

    if (!productData.product_percentage) {
      window.alert("도수를 작성하세요!");
      percentage.current.focus();
      return;
    }

    if (!productData.product_volume) {
      window.alert("용량을 작성하세요!");
      volume.current.focus();
      return;
    }

    if (!productData.product_price) {
      window.alert("금액을 작성하세요!");
      price.current.focus();
      return;
    }

    if (!productData.product_stock) {
      window.alert("재고를 작성하세요!");
      stock.current.focus();
      return;
    }
    if (!productData.product_detailexp) {
      window.alert("상세 설명을 작성하세요!");
      detailexp.current.focus();
      return;
    }
    axios
      .post("http://localhost:8000/product", productData)
      .then(function (response) {
        console.log(response);
        const productId = response.data.id;
        window.location.href = `/products/${productId}`;
      })
      .catch(function (error) {})
      .then(function () {});
    console.log(productData.product_mainimage);
  };

  const saveDataHandler = (data) => {
    console.log(data);
    setProductData((prevData) => {
      return {
        ...prevData,
        product_subimage: [...prevData.product_subimage, data],
      };
    });
  };

  const saveMainDataHandler = (data) => {
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
    <div id="formWrap">
      <div className="InputForm">
        {/* 윗단 */}
        <div className="up">
          {/* 상품등록 */}
          <div className="productHeader">
            <h4>상품등록</h4>
          </div>
          {/* 기본정보 > 상품이미지 */}
          <div className="basicInfo_image">
            <div className="infoLeft">
              <h3>기본정보</h3>
              {/* 상품 이미지 & 아래 설명 */}
              <div className="productInfo">
                <h4>상품 이미지</h4>

                <p>상품 이미지 설명 </p>
                <span>대표사진을 골라주세요.</span>
              </div>
            </div>
            <div className="infoRight imgbox">
              {/* 이미지 등록 */}
              <div className="test1">
                <ImageUploader maxFiles={1} onSaveData={saveMainDataHandler}>
                  {/* <image></image> */}
                </ImageUploader>
              </div>
            </div>
          </div>
          {/* 기본정보 > 입력 */}
          <div className="basicInfo_product">
            <ul className="productInfo">
              <li className="">
                <span>상품명 </span>
                <Input
                  ref={name}
                  name={"product_name"}
                  onSaveProductData={productDataHandler}
                />
              </li>
              <li>
                <span>소개 </span>
                <Input
                  ref={introduction}
                  name={"product_introduction"}
                  onSaveProductData={productDataHandler}
                />
              </li>
            </ul>
            <ul className="productType">
              <li className="product_category">
                <span>주종 </span>
                <select
                  ref={category}
                  name="product_category"
                  value={productData.product_category}
                  onChange={productDataHandler}
                >
                  <option>선택해주세요</option>
                  <option value="탁주">탁주</option>
                  <option value="증류주">증류주</option>
                  <option value="과실주">과실주</option>
                </select>
              </li>
              {/* 도수 */}
              <li className="productAlcohol">
                <span>도수 </span>
                <Input
                  ref={percentage}
                  step="0.1"
                  min="0"
                  max="100"
                  name="product_percentage"
                  type={"number"}
                  onSaveProductData={productDataHandler}
                />
                <span> %</span>
              </li>
              {/* 용량 */}
              <li className="productCapacity">
                <span>용량 </span>
                <Input
                  ref={volume}
                  min="10"
                  max="10000"
                  type={"number"}
                  name="product_volume"
                  onSaveProductData={productDataHandler}
                />
                <span> ml</span>
              </li>
            </ul>
            <ul className="productTotal">
              {/* 가격 */}
              <li className="productPrice">
                <span>가격 </span>
                <Input
                  ref={price}
                  min="1000"
                  max="1000000"
                  type={"number"}
                  name="product_price"
                  onSaveProductData={productDataHandler}
                />
                <span> 원</span>
              </li>
              <li className="productInventory">
                <span>재고 </span>
                <Input
                  step="1"
                  min="1"
                  max="1000"
                  ref={stock}
                  type={"number"}
                  name="product_stock"
                  onSaveProductData={productDataHandler}
                />
                <span> 개</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="detailBox">
          <h3>상세설명</h3>
          <br />
          <br />
          <div className="bottomBox">
            <div className="test2">
              <ImageUploader maxFiles={5} onSaveData={saveDataHandler} />
            </div>
            <div className="detailInfo">
              <Input
                ref={detailexp}
                type="textarea"
                name="product_detailexp"
                onSaveProductData={productDataHandler}
              />
            </div>
            <div>
              <button className="submit-button" onClick={handleSubmit}>
                등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
