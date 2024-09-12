import React, { useState, useContext } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Context } from '..';
import DisableExtraFunctionModal from './modals/DisableExtraFunctionModal';

const DisableExtraFunctions = () => {
    const {settings} = useContext(Context)
    const extraFunctions = [...settings.extraFunctions]
    const purchasedFunctionsIds = settings.purchasedFunctions.map((e)=> {
        return e.extraFunctionId
    })
    const purchasedFunctions = extraFunctions.filter((e, i)=> purchasedFunctionsIds.includes(e.id))
    const bankInfo = settings.bankInfo
    
    const [visibleStates, setVisibleStates] = useState(
        extraFunctions.map(() => false)
    );

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
            {purchasedFunctions.map((e, i) => (
                <Col key={i}>
                    <Card>
                        <Card.Header as="h5">Отключить функцию "{e.name}"</Card.Header>
                        <Card.Body>
                            <Card.Text>{e.description}</Card.Text>
                            <Button 
                                variant="dark"
                                onClick={() => handleShow(i)}
                            >
                                Отключить
                            </Button>
                            <DisableExtraFunctionModal
                                show={visibleStates[i]} 
                                onHide={() => handleHide(i)} 
                                price={e.price} 
                                userBankId={bankInfo.id}
                                extraFunctionId={e.id}
                                name={e.name}
                                description={e.description}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default DisableExtraFunctions;