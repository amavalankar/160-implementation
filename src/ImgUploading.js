/* eslint-disable */
import { useState } from "react"
import { storage } from "./firebase/firebase.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import AddModal from "./components/AddModal.js"
import { updateFinalUrl } from "./components/AddModal.js"

var exportUrl = ""
var exportStartedUpload = false;



function ImgUploading(props) {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [savedUrl, setUrl] = useState("");
  const [startedUpload, setStartedUpload] = useState(false);



  exportUrl = savedUrl


  function handleChange(event) {
    setFile(event.target.files[0]);
    setPercent(0)

  }

  function resetUrl() {
    setUrl("");
  }

  <AddModal resetUrl={resetUrl} />

  const handleUpload = () => {
    if (!file) {
      alert("No file is selected");
    } else {


      setStartedUpload(true);

      const storageRef = ref(storage, `${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setUrl(url);
            console.log("trying to add url to be " + url)
            setTimeout(() => {
              updateFinalUrl()

            }, 1000);
            setStartedUpload(true);
            exportStartedUpload = startedUpload;

          });
        }
      );

    }

  }


  return (
    <div className="ImgUploading">

      <input type="file" accept="image/*" onChange={handleChange} />
      <button className="button-primary" style={{ background: "white", }} type="button" onClick={handleUpload}>Upload Image</button>
      {startedUpload && <p>{percent}% Uploaded  Please wait a few seconds after uploading.</p>}
    </div>
  );
}

export default ImgUploading;
export { exportUrl, exportStartedUpload };