import React, {useContext, useState, useEffect} from 'react';
import {Container} from "react-bootstrap";
import { userInfoAll } from '../http/userInfoAPI';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import jwt_decode from "jwt-decode";
import {login, registration} from "../http/userAPI";
import Table from 'react-bootstrap/Table';

const Panel = observer(() => {
    const {device} = useContext(Context)

    const [userInfo, setUserInfo] = useState('')
    const token = jwt_decode(localStorage.getItem('token'))
    useEffect(async () => {
        try {
            const userInfo = await userInfoAll()
            setUserInfo(userInfo)
            console.log(userInfo)
        } catch(e) {
            console.error(e)
        }
    }, []);

    return (
        <Container>
            <Row className="mt-2">
                {
                    userInfo === "" 
                    ?  
                    <div>Loading...</div>
                    :
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                <tr>
                                    {Object.keys(userInfo[0]).map((e)=> {
                                        return <th className="mr-3">{e}</th>
                                    })}
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        userInfo.map((e, i)=> {
                                            return (
                                                <tr>
                                                {
                                                    Object.values(userInfo[i]).map((el) => {
                                                        return <td>{el}</td>
                                                    })
                                                }
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

export default Panel;
