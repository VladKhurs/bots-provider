import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {buyExtraFunction} from "../../http/userBankAPI";
import { Context } from '../..';

const BuyExtraFunction = ({show, onHide, price, name, userBankId, extraFunctionId}) => {
    const {settings} = useContext(Context)
    const onBuyFunction = async () => {
        const data = await buyExtraFunction(userBankId, extraFunctionId)
        console.log('buyExtraFunction', data)
        const purchasedFunctions = [...settings.purchasedFunctions, data]
        settings.setPurchasedFunctions([...purchasedFunctions])

        const purchasedFunctionsIds = settings.purchasedFunctions.map((e)=> {
            return e.extraFunctionId
        })
        const extraFunctions = settings.extraFunctions.filter((e, i)=> !purchasedFunctionsIds.includes(e.id))
        settings.setExtraFunctionsToBuy(extraFunctions)

        settings.setIsChanged(Date.now())
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
