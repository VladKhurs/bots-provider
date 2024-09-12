import React, {useState, useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {disableExtraFunction} from "../../http/userBankAPI";
import { Context } from '../..';
import { createHistoryItem } from '../../http/historyAPI';

const DisableExtraFunctionModal = ({show, onHide, name, description, userBankId, extraFunctionId}) => {
    const {settings} = useContext(Context)
    const onDisableFunction = async () => {
        const data = await disableExtraFunction(userBankId, extraFunctionId)
        const sett = {login: settings.adminInfo.login, id: settings.adminInfo.id}
        await createHistoryItem('date', 'time', sett.login, 'Отключить дополнительную функцию', sett.id)
        const purchasedFunctions = settings.purchasedFunctions.filter((fun)=> fun.id !== data.id)
        settings.setPurchasedFunctions([...purchasedFunctions])
        console.log('purchasedFunctions1', purchasedFunctions)
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
