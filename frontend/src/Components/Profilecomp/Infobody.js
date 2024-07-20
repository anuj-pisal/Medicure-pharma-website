import React from 'react';
import './Infobody.css';

function Infobody({ user }) {
  return (
    <div className="infobody">
      <p><label htmlFor="username">Username</label></p>
      <input id="username" type="text" defaultValue={user?.name || ''} />
      <p><label htmlFor="email">Email</label></p>
      <input id="email" type="email" defaultValue={user?.email || ''} />
      <p><label htmlFor="phone">Phone</label></p>
      <input id="phone" type="tel" defaultValue={user?.contact || ''} />
    </div>
  );
}

export default Infobody;
