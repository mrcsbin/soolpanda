import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { AiFillMinusCircle } from "react-icons/ai";
import "../css/ProductForm.css";

const ImageUploader = (props) => {
  let no = 0;

  const [files, setFiles] = useState([]);

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
        console.log(base64Image);

        newFiles.push({
          file,
          base64Image,
        });
        setFiles(newFiles);
        props.onSaveData(newFiles);
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
              <p className="add">이곳을 눌러서 이미지를 추가하세요.</p>
            </div>
          )}
        </Dropzone>
        {files.map((file, index) => (
          <div className="images" key={no++}>
            <img
              src={file.base64Image}
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
    </div>
  );
};

export default ImageUploader;
