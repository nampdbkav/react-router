import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img width='100%' src='https://i.imgur.com/c0BwyCg.jpg' alt='Loading' />
            <Link to='/'><button>Go Back HomePage</button></Link>
        </div>
    );
};

export default NotFound;