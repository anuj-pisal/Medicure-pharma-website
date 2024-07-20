import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InfoHeader.css';

function InfoHeader() {
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data'))); 
  const [imgId, setImgId] = useState(Math.floor(Math.random() * 9000));
  const [showBtn, setBtn] = useState(true);
  const [url, setUrl] = useState(localStorage.getItem('url') || "img/profile.jpg");

  async function getdata(e) {
    e.preventDefault();
    const newImgId = Math.floor(Math.random() * 9000);
    setImgId(newImgId);
    
    let formData = new FormData();
    formData.append("photo", photo);
    formData.append("ImgId", newImgId);

    const config = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    };

    try {
      await axios.post("http://localhost:5000/createprofile", formData, config);
      let result = await fetch(`http://localhost:5000/getprofile/${newImgId}`);
      result = await result.json();
      setData(result[0]);
      setBtn(false);
    } catch (error) {
      console.error("Failed to fetch or upload data:", error);
    }
  }

  useEffect(() => {
    if (data) {
      const imageUrl = `http://localhost:5000/uploads/${data.photo}`;
      setUrl(imageUrl);
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('url', imageUrl);
    }
  }, [data]);

  useEffect(() => {
    if (url) {
      console.log(data);
      console.log(url);
    }
  }, [url]);

  useEffect(() => {
    localStorage.clear();
  },[])

  return (
    <div className="info-header">
      {url && (
        <img
          src={url}
        />
      )}
      <form onSubmit={getdata}>
        <div className="buttons">
          {showBtn && <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            placeholder="photo"
            name="photo"
          />}
        </div>
        {showBtn && <button type='submit'>Upload Photo</button>}
      </form>
    </div>
  );
}

export default InfoHeader;
