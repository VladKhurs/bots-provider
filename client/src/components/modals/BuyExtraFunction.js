import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";
import {changeTarif} from "../../http/userBankAPI";

const BuyExtraFunction = ({show, onHide, price, name, userBankId, extraFunctionId}) => {
    const onChangeTarif = async () => {
        const data = await changeTarif(userBankId, extraFunctionId)
        console.log('changeTarif', data)
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
                <Button variant="outline-success" onClick={onChangeTarif}>Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BuyExtraFunction;
