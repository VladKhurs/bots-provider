import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {changeTarif} from "../../http/userBankAPI";
import { Context } from '../..';
import { useStore } from '../../state/State';
import { fetchUserTarif } from '../../http/tarifAPI';
import { fetchExtraFunctionsWhereTarif } from '../../http/extraFunctionAPI';

const BuyTarif = ({show, onHide, price, period, userId, tarifId}) => {
    const tarifInfo = useStore((state) => state.tarifInfo);
    const bankInfo = useStore((state) => state.bankInfo);
    const {setIsChanged, setTarifInfo, setBankInfo, setExtraFunctions} = useStore()
    const onChangeTarif = async () => {
        console.log(1111111111111111111111111111111111111)
        const data = await changeTarif(userId, tarifId)
        setBankInfo(data)
        const tarifInfoFetched = await fetchUserTarif(data.tarifId);
        setTarifInfo(tarifInfoFetched);

        const extraFunctions = await fetchExtraFunctionsWhereTarif(bankInfo.tarifId);
        setExtraFunctions(extraFunctions);
        console.log('tarifId', tarifId)
        console.log('tarifId data',tarifInfoFetched)
        console.log('bankInfo data',bankInfo)

        onHide()
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
