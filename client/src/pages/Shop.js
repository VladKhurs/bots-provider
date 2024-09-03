import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Shop = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    type
                </Col>
                <Col md={9}>
                    brand
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
