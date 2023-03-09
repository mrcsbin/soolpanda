import React from "react";
import axios from "axios";

const Put = () => {
  const onClickHandler = () => {
    axios
      .put("http://localhost:8000/product/")
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const updateUser = (userId, updatedData) => {
    axios
      .put(`/users/${userId}`, updatedData)
      .then((response) => {
        // 성공적으로 요청을 보낸 경우 실행될 코드
      })
      .catch((error) => {
        // 요청이 실패한 경우 실행될 코드
      });
  };

  // 사용자 ID가 123인 사용자의 이름과 이메일을 업데이트하는 예시
  updateUser(123, { name: "John Doe", email: "johndoe@example.com" });

  return (
    <div>
      <p>Put</p>
      <button onClick={onClickHandler}>Put</button>
    </div>
  );
};

export default Put;
