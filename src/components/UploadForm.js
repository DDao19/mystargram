import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const fileTypes = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let uploadedFile = e.target.files[0];
    // check file type uploaded error handler
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
      <h5 className="upload">Click To Upload</h5>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
