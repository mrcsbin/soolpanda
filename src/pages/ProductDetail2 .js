import React, { useState } from "react";
//import { useParams } from "react-router-dom";
import "./detail.css";

const data = {
  product1: {
    name: "안동탁주",
    price: "15000",
    content:
      "설명은 DB연동하면 거기서 받아오는 걸로 하겠습니다 우선은 더미 데이터로 해볼게요",
    comment: "안동에서 빚은 탁주입니다.",
    type: "탁주",
    percent: "15%",
    capacity: "500ml",
  },
  product2: {
    name: "매실주",
    price: "1250",
    content:
      "설명은 DB연동하면 거기서 받아오는 걸로 하겠습니다 우선은 더미 데이터로 해볼게요",
  },
};

const ProductDetail2 = () => {
  // 주소 props로 제품명이나 제품 넘버를 전달 받고, DB에서 검색하여 화면에 뿌려주는 방식으로 설계를 해볼 생각입니다.
  //const params = useParams();

  const product = data.product1;

  const [number, setnumber] = useState(0);
  const onClick = () => {
    setnumber(number + 1);
  };
  const onClick2 = () => {
    setnumber(number - 1);
  };

  const pprice = number * product.price;

  return (
    <div id="wrap">
      <main className="left">
        <div>
          <img></img>
        </div>
        <div>
          {product.name}
          {product.price}
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like). Where does it come from? Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham. Where can I get some? There are many
          variations of passages of Loremlooking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham. Where can I get some? There are many variations of passages
          of Loremlooking at its layout. The point of using Lorem Ipsum is that
          it has a more-or-less normal distribution of letters, as opposed to
          using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like). Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Where can I get
          some? There are many variations of passages of Lorem
        </div>
      </main>
      <aside className="right">
        <div class="title">
          <h2 className="name">{product.name}</h2>
          <p className="coment">{product.comment}</p>
        </div>
        <ul>
          <li className="type">주종 {product.type}</li>
          <li className="percent">도수 {product.percent}</li>
          <li className="capacity">용량 {product.capacity}</li>
          <li className="price">{product.price}원</li>
        </ul>
        <div className="btn">
          <button className="option btnl" onClick={onClick2}>
            -
          </button>
          {number}
          <button className="option btnr" onClick={onClick}>
            +
          </button>
        </div>
        <p>총상품금액{product.pprice}</p>

        <button className="buy">구매하기</button>
      </aside>
    </div>
  );
};

export default ProductDetail2;
