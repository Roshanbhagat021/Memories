import React, { useState } from "react";
 import axios from 'axios'; 

const Form = () => {
  const [formValues, setformValues] = useState({
    creator: "",
    title: "",
    tags: "",
    image: "",
    message: "",
  });

  const [image, setImage] = useState(null);
  const [loading, SetLoading]  = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file)
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setformValues((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };



 

const handleSubmit = async (e) => {
  e.preventDefault();
  SetLoading(true)

  try {
    const formData = new FormData();
    formData.append("image", image);

    const uploadRes = await axios.post("http://localhost:8080/upload", formData);
    const uploadedImageUrl = uploadRes.data.imageUrl;

    const memoryData = {
      ...formValues,
      image: uploadedImageUrl,
      tags: formValues.tags.split(",").map((tag) => tag.trim()),
    };

    await axios.post("http://localhost:8080/posts", memoryData);

    resetForm();
  } catch (error) {
    console.error("Error submitting form:", error);
  }finally{
    SetLoading(false)
  }
};


  const resetForm = () => {
    setformValues({
      creator: "",
      title: "",
      tags: "",
      image: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 border rounded space-y-3 w-full max-w-[280px] h-max outline-none"
    >
      <h2 className="text-lg font-medium text-center">Create Memory</h2>

      <input
        type="text"
        name="creator"
        placeholder="Creator"
        value={formValues.creator}
        onChange={handleChange}
        className="w-full p-1 border rounded text-sm outline-none"
        required
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formValues.title}
        onChange={handleChange}
        className="w-full p-1 border rounded text-sm outline-none"
        required
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formValues.tags}
        onChange={handleChange}
        className="w-full p-1 border rounded text-sm outline-none"
      />

      <label className="w-full bg-gray-200 p-1 text-sm text-center  rounded cursor-pointer hover:bg-gray-300">
        Choose Image
        <input
          type="file"
          accept="image/*"
          // onChange={handleImageChange}
          onChange={e => handleImageChange(e)}

          className="hidden"
          required
        />
      </label>

      {formValues.image && (
        <img
          src={formValues.image}
          alt="Preview"
          className="w-full h-32 object-cover border rounded mt-2"
        />
      )}

      <textarea
        name="message"
        placeholder="message"
        value={formValues.message}
        onChange={handleChange}
        rows={3}
        className="w-full p-1 border rounded text-sm outline-none mt-3"
        required
      />

      <div className="flex justify-between gap-2">
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600"
        >
         {loading? "Posting...":"Post"}
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="flex-1 bg-gray-300 text-black text-sm py-1 rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
