// import React, { useState } from "react";
// import axios from "axios";

// const Get = () => {
//   const [ProductData, setProductData] = useState({ id: "" });

//   const onClickHandler = () => {
//     axios
//       .get("http://localhost:8000/product/10")
//       .then((Response) => {
//         console.log(Response);
//         console.log(Response.data);
//         const ProductData2 = Response.data;
//         console.log("ProductData ID" + ProductData2.id);
//         setProductData(ProductData2.id);
//       })
//       .catch((Error) => {
//         console.log(Error);
//       });
//   };

//   return (
//     <div>
//       <p>Get</p>
//       <button onClick={onClickHandler}>Get</button>
//       <p>{ProductData}</p>
//     </div>
//   );
// };

// export default Get;

import React, { useState } from "react";
import axios from "axios";

const Get = () => {
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

  const onClickHandler = () => {
    axios
      .get("http://localhost:8000/product/10")
      .then((Response) => {
        console.log(Response);
        console.log(Response.data);
        console.log("ProductData ID" + Response.data.product_name);
        setProductData(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <p>Get</p>
      <button onClick={onClickHandler}>Get</button>

      <p>{productData.product_name}</p>
      <img src={productData.product_info[0]} />
    </div>
  );
};

export default Get;
