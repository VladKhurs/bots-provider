import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import BuyExtraFunction from './modals/BuyExtraFunction';

const ExtraFunctions = ({ extraFunctions, bankInfo }) => {
    const [visibleStates, setVisibleStates] = useState(
        extraFunctions.map(() => false)
    );
    console.log('visibleStates', visibleStates)

    const handleShow = (index) => {
        const newVisibleStates = [...visibleStates];
        newVisibleStates[index] = true;
        setVisibleStates(newVisibleStates);
    };

    const handleHide = (index) => {
        const newVisibleStates = [...visibleStates];
        newVisibleStates[index] = false;
        setVisibleStates(newVisibleStates);
    };

    return (
        <Row>
            {extraFunctions.map((e, i) => (
                <Col key={i}>
                    <Card>
                        <Card.Header as="h5">{e.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{e.price}</Card.Title>
                            <Card.Text>{e.description}</Card.Text>
                            <Button 
                                variant="dark"
                                onClick={() => handleShow(i)}
                            >
                                Добавить функцию
                            </Button>
                            <BuyExtraFunction
                                show={visibleStates[i]} 
                                onHide={() => handleHide(i)} 
                                price={e.price} 
                                userBankId={bankInfo.id}
                                extraFunctionId={e.id}
                                name={e.name}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ExtraFunctions;