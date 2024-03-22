import React from "react";

const FileInput = ({ onFileSelect, required }) => {
  const handleFileChange = async (event) => {
    const resume = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", resume);
      const response = await fetch("http://localhost:9000/resume", {
        body: formData,

        method: "post",
      });
      const data = await response.json();
      console.log({ data });
      if (data.status === "success") {
        onFileSelect(data.filePath);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="file">
      <input
        type="file"
        name="category_img"
        required={required}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
