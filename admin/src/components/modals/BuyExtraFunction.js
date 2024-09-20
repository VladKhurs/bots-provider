import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {buyExtraFunction} from "../../http/userBankAPI";
import { Context } from '../..';
import { useStore } from '../../state/State';

const BuyExtraFunction = ({show, onHide, price, name, userBankId, extraFunctionId}) => {
    const purchasedFunctionsState = useStore((state) => state.purchasedFunctions);
    const extraFunctionsState = useStore((state) => state.extraFunctions);
    const {setPurchasedFunctions, setExtraFunctionsToBuy} = useStore()
    const onBuyFunction = async () => {
        const data = await buyExtraFunction(userBankId, extraFunctionId)
        console.log('buyExtraFunction', data)
        const purchasedFunctions = [...purchasedFunctionsState, data]
        setPurchasedFunctions([...purchasedFunctions])
        const purchasedFunctionsIds = purchasedFunctionsState.map((e)=> {
            return e.extraFunctionId
        })
        const extraFunctions = extraFunctionsState.filter((e, i)=> !purchasedFunctionsIds.includes(e.id))
        setExtraFunctionsToBuy(extraFunctions)
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить дополнитльную функцию "{name}"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Цена доплнительной функции: {price} уе
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Отклонить</Button>
                <Button variant="outline-success" onClick={onBuyFunction}>Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BuyExtraFunction;
