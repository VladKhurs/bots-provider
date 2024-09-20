import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {changeTarif} from "../../http/userBankAPI";
import { Context } from '../..';
import { useStore } from '../../state/State';

const BuyTarif = ({show, onHide, price, period, userId, tarifId}) => {
    const tarifInfo = useStore((state) => state.tarifInfo);
    const {setIsChanged, setTarifInfo} = useStore()
    const onChangeTarif = async () => {
        const data = await changeTarif(userId, tarifId)
        console.log('tarifId', tarifId)
        console.log('tarifId data',data)
        onHide()
        //onSetTarifInfo(data)
        setIsChanged(Date.now())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Стоимость тарифа "{tarifInfo.name}": {price} уе
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
