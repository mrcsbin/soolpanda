// import React, { useRef, useState } from "react";

// function PhotoUploader() {
//   // 사진 업로드 버튼 이벤트 핸들러
//   const photoInput = useRef();
//   const handleClick = () => {
//     photoInput.current.click();
//   };

//   // 사진 등록하기 및 미리보기 기능 구현
//   const [photoToAddList, setPhotoToAddList] = useState([]);

//   const photoToAddPreview = () => {
//     return photoToAddList.map((photo) => {
//       return (
//         <div className="photoBox" key={photo.url}>
//           <CloseCircleFilled
//             className="photoBoxDelete"
//             onClick={() => onRemoveToAdd(photo.url)}
//           />
//           <img className="photoPreview" src={photo.url} />
//         </div>
//       );
//     });
//   };

//   const onRemoveToAdd = (deleteUrl) => {
//     setPhotoToAddList(photoToAddList.filter((photo) => photo.url != deleteUrl));
//   };

//   const handlePhoto = (e) => {
//     const temp = [];
//     const photoToAdd = e.target.files;

//     for (let i = 0; i < photoToAdd.length; i++) {
//       temp.push({
//         id: photoToAdd[i].name,
//         file: photoToAdd[i],
//         url: URL.createObjectURL(photoToAdd[i]),
//       });
//     }
//     setPhotoToAddList(temp.concat(photoToAddList));
//   };
//   return (
//     <div className="contentWrapper">
//       <div className="contentBody photoUploaderWrapper">
//         <Row justify="end">
//           <p>클로이와 홍대 나들이</p>
//         </Row>
//         <div className="photoUploaderContent">
//           <div className="photoBox addPhoto">
//             {/* <PlusOutlined /> */}
//             <PictureFilled onClick={handleClick} />
//             <input
//               type="file"
//               accept="image/jpg, image/jpeg, image/png"
//               multiple
//               ref={photoInput}
//               onChange={(e) => handlePhoto(e)}
//               style={{ display: "none" }}
//             />
//           </div>
//           {photoToAddPreview()}
//           {photoAddedPreview()}
//         </div>
//       </div>
//       <Row justify="center">
//         <Button className="photoUploadComplete" onClick={savePhoto}>
//           기록하기
//         </Button>
//       </Row>
//     </div>
//   );
// }

// export default PhotoUploader;
