import React, {useState,useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {changeTarif} from "../../http/userBankAPI";
import { Context } from '../..';

const BuyTarif = ({show, onHide, price, period, userId, tarifId}) => {
    const {settings} = useContext(Context)
    const onChangeTarif = async () => {
        const data = await changeTarif(userId, tarifId)
        settings.setIsChanged(Date.now())
        console.log('tarifId', tarifId)
        console.log(data)
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
                    Стоимость тарифа "{settings.tarifInfo.name}": {price} уе
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Период действия тарифа: {period} дней
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Отклонить</Button>
                <Button variant="outline-success" onClick={onChangeTarif}>Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BuyTarif;
