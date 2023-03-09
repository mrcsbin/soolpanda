import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { AiFillMinusCircle } from "react-icons/ai";
import "../css/ProductForm.css";

const ImageUploader3 = (props) => {
  let no = 0;

  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(props.images);
    console.log(files);
    console.log(props.images[0]);
  }, []);

  const onDrop = (acceptedFiles, tmi) => {
    if (acceptedFiles.length + no > 5) {
      alert("최대 5장까지만 사진을 첨부할수 있습니다.");
      return;
    }
    const newFiles = [...files];
    console.log(files);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;

        newFiles.push({
          file,
          base64Image,
        });
        setFiles(newFiles);
        props.onSaveData(newFiles);
        console.log(files);
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
  };

  return (
    <div>
      <div className="image-container">
        <Dropzone
          onDrop={onDrop}
          accept={{ "image/*": [".png", ".gif", ".jpeg", ".jpg"] }}
          maxSize={5242880}
          maxFiles={5}
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

export default ImageUploader3;
