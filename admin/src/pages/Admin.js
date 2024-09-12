import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import NavBar from '../components/NavBar';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <div className="h2 text-center mt-4">Разделы</div>
            <NavBar></NavBar>
        </Container>
    );
};

export default Admin;
