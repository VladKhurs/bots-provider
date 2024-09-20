import React, {useState, useEffect} from 'react';
import {Container} from "react-bootstrap";
import { userInfoAll } from '../http/userInfoAPI';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import jwt_decode from "jwt-decode";
import {login, registration} from "../http/userAPI";
import Table from 'react-bootstrap/Table';
import { fetchAllTarifs } from '../http/tarifAPI';
import { useHistory } from 'react-router-dom';
import { CLIENT_ROUTE } from '../utils/consts';
import { useStore } from '../state/State';

const Clients = observer(() => {
    const history = useHistory()
    const token = jwt_decode(localStorage.getItem('token'))

    const allTarifs = useStore((state) => state.allTarifs);
    const allUserInfos = useStore((state) => state.allUserInfos);
    const allTarifsIds = useStore((state) => state.allTarifsIds);
    const {setAllUserInfos, setAllTarifs, setAllTarifsIds} = useStore()

    useEffect(async () => {
        try {
            const allUserInfosFetched = await userInfoAll()
            setAllUserInfos(allUserInfosFetched)
            const allTarifs = await fetchAllTarifs()
            const ids = allTarifs.map((e) => e.id)
            setAllTarifsIds(ids)
            setAllTarifs(allTarifs)
            console.log('allTarifs' , allTarifs, allTarifsIds)
        } catch(e) {
            console.error(e)
        }
    }, []);

    return (
        <Container>
            <Row className="mt-2">
                {
                    allUserInfos === "" || allTarifsIds === ''
                    ?  
                    <div>Loading...</div>
                    :
                    allTarifs === ''
                    ?  
                    <div>Loading...</div>
                    :
                    allUserInfos.length === 0
                    ?
                    <div>Пользователи отсутствуют</div>
                    :
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th className="mr-3">id</th>
                                    <th className="mr-3">Название компании</th>
                                    <th className="mr-3">Тариф</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUserInfos.map((e)=> {
                                            const tarifIndex = allTarifsIds.indexOf(e.tarifId)
                                            const tarifName = allTarifs[tarifIndex].name
                                            console.log('tarifName', tarifName)
                                            return (
                                                <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.companyName}</td>
                                                    <td>{tarifName}</td>
                                                    <td> <Button 
                                                        variant='dark'
                                                        onClick={() => history.push(CLIENT_ROUTE + '/' + e.id)}
                                                    >
                                                        О компании
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                        </Table>

                    </div>
                }
            </Row>
        </Container>
    );
});

export default Clients;
