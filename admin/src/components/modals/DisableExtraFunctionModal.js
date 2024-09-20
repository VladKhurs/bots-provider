import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {disableExtraFunction} from "../../http/userBankAPI";
import { Context } from '../..';
import { createHistoryItem } from '../../http/historyAPI';
import { useStore } from '../../state/State';
import jwt_decode from "jwt-decode";

const DisableExtraFunctionModal = ({show, onHide, name, description, userBankId, extraFunctionId}) => {
    const adminInfo = useStore((state) => state.adminInfo);
    const purchasedFunctionsState = useStore((state) => state.purchasedFunctions);
    const {setPurchasedFunctions} = useStore()
    let token = localStorage.getItem('token')
    token = jwt_decode(token)
    console.log('token', token)

    const onDisableFunction = async () => {
        const data = await disableExtraFunction(userBankId, extraFunctionId)
        await createHistoryItem('date', 'time', token.login, 'Отключить дополнительную функцию', token.id)
        //date, time, managerLogin, operation, adminId
        const purchasedFunctions = purchasedFunctionsState.filter((fun)=> fun.id !== data.id)
        setPurchasedFunctions([...purchasedFunctions])
        console.log('purchasedFunctions1', purchasedFunctions)
        console.log('data', data)
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
                    Отключить дополнительную функцию "{name}"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Отклонить</Button>
                <Button variant="outline-success" onClick={onDisableFunction}>Отключить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DisableExtraFunctionModal;
