import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const fileTypes = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let uploadedFile = e.target.files[0];

    if (uploadedFile && fileTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setError(); //if user uploads a valid image after an invalid one, it resets the error msg (error msg removed).
    } else {
      setFile(null);
      setError(
        "You can only upload a PNG or Jpeg image file. Pleast try again."
      );
    }
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
