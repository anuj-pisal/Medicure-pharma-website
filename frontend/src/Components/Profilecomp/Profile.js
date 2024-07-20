import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import General from './General';
import Info from './Info';
import './Profile.css';
import Orders from './Orders';

function Profile() {
    const user = useSelector((state) => state.user.user); // Adjust the path   .user according to your state structure
    const [activeComponent, setActiveComponent] = useState('General');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'General':
                return <General user={user} />;
            case 'Info':
                return <Info user={user} />;
            case 'Orders':            
                return <Orders user={user} />;
            default:
                return <General user={user} />;
        }
    };

    return (
        <div className="ProfileC">
        <div className="profile">
            <Navigation setActiveComponent={setActiveComponent} />
            {renderComponent()}
        </div>
        </div>
    );
}

export default Profile;
