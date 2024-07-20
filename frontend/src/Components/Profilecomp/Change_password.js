import React from 'react'
import Navigation from './Navigation';
import './Change_password.css';

export default function Change_password() {
    return (
        <div className="Pass">
            <p>

                <label for="">Current Password</label><br/>
                    <input type="text" />
            </p>
            <p>

                <label for="">New Password</label><br/>
                    <input type="text" />
            </p>
            <p>

                <label for="">Repeat Password</label><br/>
                    <input type="text" />
            </p>
        </div>
    )
}









