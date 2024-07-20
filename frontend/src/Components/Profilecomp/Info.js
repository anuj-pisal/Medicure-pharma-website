import React from 'react';
import './Info.css';
import { useState } from 'react';

export default function Info({ user }) {

  // const [bio, setBio] = useState("");
  // const [birthdate, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [phone, setPhone] = useState("");

  // if(user.bio != null){
  //   setBio(user.bio);
  // }

  // if(user.birthdate != null){
  //   setBirth(user.birthdate.split('T')[0]);
  // }

  // if(user.country != null){
  //   setCountry(user.country);
  // }

  // if(user.contact != null){
  //   setPhone(user.contact);
  // }

  return (
    <div className="Info">
      <p>
        <label htmlFor="bio">Bio</label><br />
        <textarea id="bio" cols="90" rows="5" defaultValue={user?.bio || ""}></textarea>
      </p>
      <p>
        <label htmlFor="birth">Birthday</label><br />
        <input type="date" id="birth" defaultValue={user?.birthdate ? user.birthdate.split('T')[0] : ""} />
      </p>
      <p>
        <label htmlFor="country">Country</label><br />
        <input type="country" id="country" defaultValue={user?.country || ""} />
      </p>
      <p>
        <label htmlFor="contact">Phone</label><br />
        <input type="tel" defaultValue={user?.contact || ""} />
      </p>
    </div>
  );
}
