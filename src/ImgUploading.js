import { useState } from "react"
import { storage } from "./firebase/firebase.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"


function ImgUploading() {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0)

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("no file selected");
    }

    const storageRef = ref(storage, `${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 10
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }


  return (
    <div className="ImgUploading">
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p>
    </div>
  );
}

export default ImgUploading;