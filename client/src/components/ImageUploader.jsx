import { useState } from "react";
import axios from "axios";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    console.log('formData: ', formData);
    formData.append("image", image);
    
    const res = await axios.post("http://localhost:8080/upload", formData);
    console.log('formData: ', formData);
    setImageUrl(res.data.imageUrl);
  };

  return (
    <div>
      <h1>Hello</h1>
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="uploaded" />}
    </div>
  );
}
