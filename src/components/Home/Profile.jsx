import { Container } from '@material-ui/core';
import React from 'react';
import Cart from '../Cart/Cart';

const Profile = () => {
    
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                <img width="100px" src="https://image.flaticon.com/icons/png/128/633/633780.png" alt="you" />
                <h2>email.com</h2>
            </div>
            <Container>
                <Cart />
            </Container>
        </div>
    );
};

export default Profile;