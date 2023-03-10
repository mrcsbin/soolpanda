import React, { useState } from "react";

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const newImages = [...images];
    for (let i = 0; i < e.target.files.length; i++) {
      newImages.push(e.target.files[i]);
    }
    setImages(newImages);
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(image)} alt={`${index}`} />
            <button onClick={() => handleImageDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
