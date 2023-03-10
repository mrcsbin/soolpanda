import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { AiFillMinusCircle } from "react-icons/ai";

const Image = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState(null);

  const onDrop = (acceptedFiles) => {
    const newFiles = [...files];
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newFiles.push(file);
        setFiles(newFiles);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleCrop = () => {
    const croppedImage = cropper.getCroppedCanvas().toDataURL();
    setImage(croppedImage);
  };

  const handleDelete = (index) => {
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
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>이곳에 드랍하거나 클릭하여 사진을 추가하세요</p>
          </div>
        )}
      </Dropzone>
      {image && (
        <div>
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            aspectRatio={1}
            guides={false}
            crop={(event) => console.log(event.detail)}
            onInitialized={(instance) => setCropper(instance)}
          />
          <button onClick={handleCrop}>Crop Image</button>
          <button onClick={() => setImage(null)}>Cancel</button>
        </div>
      )}
      <div className="images">
        {files.map((file, index) => (
          <div key={file.name}>
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <button onClick={() => handleDelete(index)}>
              <AiFillMinusCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
