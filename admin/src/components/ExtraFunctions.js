import React, { useState } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { useStore } from '../state/State';
import BuyExtraFunction from './modals/BuyExtraFunction';

const ExtraFunctions = ({ bankInfo }) => {

    const purchasedFunctionsState = useStore((state) => state.purchasedFunctions);
    const extraFunctionsState = useStore((state) => state.extraFunctions);

    const purchasedFunctionsIds = purchasedFunctionsState.map((e)=> {
        return e.extraFunctionId
    })
    const extraFunctions = extraFunctionsState.filter((e, i)=> !purchasedFunctionsIds.includes(e.id))
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
        <Container>
            {
                extraFunctions.length === 0
                ?
                <div>Вы подключили все имеющиеся дополнительные функции</div>
                :
                <Row>
                    {extraFunctions.map((e, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Header as="h5">{e.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{e.price}</Card.Title>
                                    <Card.Text style={{display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{e.description}</Card.Text>
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
            }
        </Container>
    );
};

export default ExtraFunctions;