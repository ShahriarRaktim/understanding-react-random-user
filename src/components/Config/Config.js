import React from 'react';
import './Config.css'

const Config = (props) => {
    const {uuid, username, password} = props.user.login;
    return (
        <div className='log-in'>
            <h1>FOR LOG IN</h1>
            <h4>UUID:{uuid}</h4>
            <h4>USERNAME:{username}</h4>
            <h4>PASSWORD:{password}</h4>
        </div>
    );
};

export default Config;