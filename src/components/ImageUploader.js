import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { AiFillMinusCircle } from "react-icons/ai";
import "../css/ProductForm.css";

const ImageUploader = (props) => {
  let no = 0;

  const [files, setFiles] = useState([]);

  // console.log(props.subimg.map((image) => console.log(image)));
  console.log(props.subimg);
  const subimgArray = props.subimg;
  console.log(subimgArray);

  useEffect(() => {}, []);
  console.log(props.subimg);
  const onDrop = (acceptedFiles, tmi) => {
    if (acceptedFiles.length + no > props.maxFiles) {
      alert(`최대 ${props.maxFiles}장까지만 사진을 첨부할수 있습니다.`);
      return;
    }
    const newFiles = [...files];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        newFiles.push({
          base64Image,
        });
        setFiles(newFiles);
        props.onSaveData(base64Image);
        console.log(newFiles);
      };
      reader.readAsDataURL(file);
    });
    if (tmi.length > 0) {
      alert(`${props.maxFiles}장 미만의 사진만`);
    }
  };

  const handleDelete = (index) => {
    no--;
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div>
      <div className="image-container">
        <Dropzone
          onDrop={onDrop}
          accept={{ "image/*": [".png", ".gif", ".jpeg", ".jpg"] }}
          maxSize={5242880}
          maxFiles={props.maxFiles}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "add-container" })}>
              <input {...getInputProps()} />
              <p className="add">
                이곳을 눌러 이미지를 추가하거나, 이미지를 드래그&드롭 하세요.
              </p>
            </div>
          )}
        </Dropzone>
        {/* {props.subimg.map((image, index) => (
          <div className="images" key={no++}>
            <img
              src={image}
              alt=""
              style={{ width: "686px", height: "396px", objectFit: "cover" }}
            />
            <button
              ClassName="delete-button"
              style={{ float: "left", marginLeft: "20px" }}
              onClick={() => handleDelete(index)}
            >
              <AiFillMinusCircle size="30" color="black" />
            </button>
          </div>
        ))} */}
        {/* <img
          className="images"
          src={props.mainimg}
          width="686px"
          height="396px"
          alt=""
          onError="this.style.visibility='hidden'"
        /> */}

        {/* <img
          className="images"
          src={props.subimg}
          width="686px"
          height="396px"
          alt=""
          onError="this.style.visibility='hidden'"
        /> */}

        {files.map((file, index) => (
          <div className="images" key={no++}>
            <img
              src={file.base64Image}
              alt={file.name}
              style={{
                width: "686px",
                height: "396px",
                // maxWidth: "100%",
                // maxHeight: "100%",
                objectFit: "cover",
                // overflow: "hidden",
              }}
            />
            <button
              className="delete-button"
              style={{ float: "left", marginLeft: "20px" }}
              onClick={() => handleDelete(index)}
            >
              <AiFillMinusCircle size="50" color="black" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
