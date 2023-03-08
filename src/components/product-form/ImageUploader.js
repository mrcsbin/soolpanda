// import React, { useState } from "react";
// import Dropzone from "react-dropzone";
// import { AiFillMinusCircle } from "react-icons/ai";
// import "./ProductForm.css";

// const ImageUploader = (props) => {
//   // <AiFillPlusCircle width="50" height="10"></AiFillPlusCircle>;
//   let no = 0;

//   const [files, setFiles] = useState([]);
//   const [image, setImage] = useState(null);

//   const onDrop = (acceptedFiles, tmi) => {
//     if (acceptedFiles.length + no > 5) {
//       alert("최대 5장까지만 사진을 첨부할수 있습니다.");
//       return;
//     }
//     const newFiles = [...files];
//     acceptedFiles.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         newFiles.push(file);
//         setFiles(newFiles);
//         props.onSaveData(newFiles);
//       };
//       reader.readAsDataURL(file);
//     });
//     if (tmi.length > 0) {
//       alert("5장미만의 사진만");
//     }
//   };

//   const handleDelete = (index) => {
//     no--;
//     const newFiles = [...files];
//     newFiles.splice(index, 1);
//     setFiles(newFiles);
//     setImage(null);
//   };

//   return (
//     <div>
//       {image && (
//         <div>
//           <img src={image} alt="Crop Preview" />
//           <button onClick={() => setImage(null)}>Cancel</button>
//         </div>
//       )}
//       <div className="image-container">
//         <Dropzone
//           onDrop={onDrop}
//           accept="image/*"
//           maxSize={5242880}
//           maxFiles={5}
//         >
//           {({ getRootProps, getInputProps }) => (
//             <div {...getRootProps({ className: "add-container" })}>
//               <input {...getInputProps()} />
//               <p className="add">이곳을 눌러서 이미지를 추가하세요.</p>
//               {/* <AiFillPlusCircle className="add-button" size="30" /> */}
//             </div>
//           )}
//         </Dropzone>
//         {files.map((file, index) => (
//           <div className="images" key={no++}>
//             <img
//               src={URL.createObjectURL(file)}
//               alt={file.name}
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 objectFit: "cover",
//               }}
//             />
//             <button
//               className="delete-button"
//               style={{ float: "left" }}
//               onClick={() => handleDelete(index)}
//             >
//               <AiFillMinusCircle size="30" color="black" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;

import axios from "axios";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { AiFillMinusCircle } from "react-icons/ai";
import "./ProductForm.css";

const ImageUploader = (props) => {
  // <AiFillPlusCircle width="50" height="10"></AiFillPlusCircle>;
  let no = 0;

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
        formData.append();
      }
      const response = await axios.post("서버주소", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onDrop = (acceptedFiles, tmi) => {
    if (acceptedFiles.length + no > 5) {
      alert("최대 5장까지만 사진을 첨부할수 있습니다.");
      return;
    }
    const newFiles = [...files];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newFiles.push(file);
        setFiles(newFiles);
        props.onSaveData(newFiles);
      };
      reader.readAsDataURL(file);
    });
    if (tmi.length > 0) {
      alert("5장미만의 사진만");
    }
  };

  const handleDelete = (index) => {
    no--;
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setImage(null);
  };

  return (
    <div>
      {image && (
        <div>
          <img src={image} alt="Crop Preview" />
          <button onClick={() => setImage(null)}>Cancel</button>
        </div>
      )}
      <div className="image-container">
        <Dropzone
          onDrop={onDrop}
          accept="image/*"
          maxSize={5242880}
          maxFiles={5}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "add-container" })}>
              <input {...getInputProps()} />
              <p className="add">이곳을 눌러서 이미지를 추가하세요.</p>
              {/* <AiFillPlusCircle className="add-button" size="30" /> */}
            </div>
          )}
        </Dropzone>
        {files.map((file, index) => (
          <div className="images" key={no++}>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <button
              className="delete-button"
              style={{ float: "left" }}
              onClick={() => handleDelete(index)}
            >
              <AiFillMinusCircle size="30" color="black" />
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ImageUploader;
