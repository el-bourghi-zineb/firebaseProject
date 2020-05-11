
import React, {useState} from 'react';
import fire from '../../config/fbConfig';
import{NavLink} from 'react-router-dom';


  const Save=()=>  {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask =fire.storage().ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          fire.storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    };
  
    console.log("image: ", image);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input  type="file" onChange={handleChange} />
        <button className="btn pink lighten-1 z-depth-0" onClick={handleUpload}>Upload</button>
        <br />
        Vous pouvez partager ce lien avec vos amis pour télécharger les fichiers
        <br/>
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
        <ul className="right">
        <li><NavLink to='/profile'>Profile</NavLink></li>
    </ul>
      </div>
    );
  };
  

  export default Save;