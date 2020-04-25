import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({name, bio, profession, children}) => {
    function handleClick (e) {
        e.preventDefault();
        
        alert (`my name is ${name}`);
    }
    return (
        <>
            <p>Name : {name}</p>
            <p>bio : {bio}</p>
            <p>profession : {profession}</p>
            <button onClick={handleClick}>Click me</button>
            
         <img src={children} alt ="photo1"/>

    </>
    )
}

Profile.defaultProps ={
    name : "Default1",
    bio : "Default2",
    profession:"Default3"
}

Profile.propTypes = {
    name: PropTypes.string,
    bio : PropTypes.string,
    profession :PropTypes.string
};

export default Profile;