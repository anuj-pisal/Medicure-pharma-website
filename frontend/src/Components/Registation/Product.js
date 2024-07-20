import React, { useState } from "react";
 import axios from 'axios';
import  "./Form.css";

export default function Product() {
  const [docName,setdocName] = useState("");
  const [post, setpost] = useState("");
  const [speciality, setspeciality] = useState("");
  const [experience, setexperience] = useState("");
  const [rating, setrating] = useState("");
  const [location, setlocation] = useState("");
  const [photo, setphoto] = useState("");

  async function getdata(e) {
    e.preventDefault();
    let data = {docName,post,speciality,experience,rating,location,photo}
     
    console.log(data);
    let formData = new FormData()
    formData.append("docName",docName)
    formData.append("post",post)
    formData.append("speciality",speciality)
    formData.append("experience",experience)
    formData.append("rating",rating)
    formData.append("location",location)
    formData.append("photo",photo)
    
    const config ={
        headers:{
            "Content-type":"multipart/form-data"
        }
    }

    let result = await axios.post("http://localhost:5000/createdoctor",formData,config)

  }

  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={getdata}>
          <div className="register-wrapper">
            <div className="head-text">
              <h1>Create Doctor</h1>
            </div>
            <div className="register-body">
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setdocName(e.target.value)}
                  placeholder="docName"
                  name="docName"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setpost(e.target.value)}
                  placeholder="post"
                  name="post"
                />
              </div>
              <div className="input-box">
                <input
                  type="file"
                  onChange={(e) => setphoto(e.target.files[0])}
                  placeholder="photo"
                  name="photo"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setspeciality(e.target.value)}
                  placeholder="speciality"
                  name="speciality"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setexperience(e.target.value)}
                  placeholder="experience"
                  name="experience"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setlocation(e.target.value)}
                  placeholder="location"
                  name="location"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setrating(e.target.value)}
                  placeholder="rating"
                  name="rating"
                />
              </div>
            </div>
            <div className="register-foot">


            <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
