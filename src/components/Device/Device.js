import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    const deviceStyle = {
        backgroundColor: 'mediumspringgreen',
        padding: '1px',
        margin:'5% 25%',
        borderRadius: '20px'
    }
    const {gender, name, location, email, picture} = props.user;
    return (
       <div>
            <div style={deviceStyle}>
            <img className='rounded-pill mt-2' src={picture.large} alt="" />
            <h2>{gender}</h2>
            <h1>{name.title} {name.first} {name.last}</h1>
            <h3>{email}</h3>
            <h3>{location.city}, {location.country}</h3>
        </div>
        <Config user={props.user}></Config>
       </div>
    );
};

export default Device;