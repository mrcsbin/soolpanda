import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Button() {
  const [productData, setProductData] = useState({
    product_name: "",
    product_introduction: "",
    product_info: [],
    product_category: "",
    product_percentage: "",
    product_volume: "",
    product_price: "",
    product_stock: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/product/1")
      .then((Response) => {
        // console.log(Response);
        // console.log(Response.data);
        // console.log("ProductData ID : " + Response.data.id);
        setProductData(Response.data);
        console.log(Response.data.product_info);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const onClickHandler = () => {
    axios
      .delete("http://localhost:8000/product/" + productData.id)
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to={`/update`} state={{ productData }}>
        수정하기
      </Link>
      <Link to={`/`} onClick={onClickHandler}>
        삭제하기
      </Link>
    </div>
  );
}

export default Button;
