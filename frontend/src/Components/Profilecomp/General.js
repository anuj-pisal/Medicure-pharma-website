import React from 'react';
import InfoHeader from './InfoHeader';
import Infobody from './Infobody';
import './General.css';

function General({ user }) {
  return (
    <div className="General">
      <InfoHeader user={user} />
      <Infobody user={user} />
    </div>
  );
}

export default General;
