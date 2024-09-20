import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import NavBar from '../components/NavBar';
import Slido from '../components/Slido/Slido';

const Bots = () => {
    return (
        <Container className="d-flex flex-column">
            <div className="h2 text-center mt-4">Bots</div>
            <div className='position-relative' style={{position: 'relative'}}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/4372/4372820.png" 
                    style={{width:'200px', height:'200px'}} 
                    alt="computer-icon" 
                />
                <img 
                    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg" 
                    alt="background-icon" 
                    width={'160px'} 
                    height='110px' 
                    style={{position: 'absolute', left: '20px', top: '37px', borderRadius: '15px'}} />
            </div>
            <Slido/>
            
        </Container>
    );
};

export default Bots;
