import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    const {gender, name, location, email, picture} = props.user;
    return (
        <div>
            <img src={picture.large} alt="" />
            <h2>{gender}</h2>
            <h1>{name.title} {name.first} {name.last}</h1>
            <h3>{email}</h3>
            <h3>{location.city}, {location.country}</h3>
            
        </div>
    );
};

export default Device;