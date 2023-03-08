import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./ProductForm.css";

const ImageUploader = () => {
  let no = 0;

  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

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
      <Dropzone
        onDrop={onDrop}
        accept="image/*"
        multiple={true}
        maxSize={5242880}
        maxFiles={5}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "add-container" })}>
            <input {...getInputProps()} />
            <AiFillPlusCircle className="add-button" size="30" />
          </div>
        )}
      </Dropzone>
      {image && (
        <div>
          <img src={image} alt="Crop Preview" />
          <button onClick={() => setImage(null)}>Cancel</button>
        </div>
      )}
      <div className="image-container">
        {/* <img src="" */}
        {files.map((file, index) => (
          <div className="images" key={no++}>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <button
              className="delete-button"
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
