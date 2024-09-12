


import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import NavBar from '../components/NavBar';

const Bots = () => {
    return (
        <Container className="d-flex flex-column">
            <div className="h2 text-center mt-4">Bots</div>
            <NavBar></NavBar>
        </Container>
    );
};

export default Bots;