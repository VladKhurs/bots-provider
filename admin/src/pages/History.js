import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import { Context } from '..';
import NavBar from '../components/NavBar';
import { fetchHistory } from '../http/historyAPI';
import { useStore } from '../state/State';

const History = () => {
    const [history, setHistory] = useState('')
    useEffect(async () => {
        try {
            const history = await fetchHistory()
            setHistory(history)
            console.log('history', history)
        } catch(e) {
            console.error(e)
        }
    }, []);

        /*
        const history = useStore((state) => state.history);
    const { setHistory } = useStore()
    useEffect(async () => {
        try {
            const historyFetched = await fetchHistory()
            setHistory(historyFetched)
            console.log('history', history)
        } catch(e) {
            console.error(e)
        }
    }, []);
    */

    return (
        <Container className="d-flex flex-column">
            <div className='h3'>История операций</div>
            <Row className="mt-2">
                {
                    history === ""
                    ?  
                    <div>Loading...</div>
                    :
                    history === []
                    ?
                    <div>Пользователи отсутствуют</div>
                    :
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th className="mr-3">id</th>
                                    <th className="mr-3">Дата</th>
                                    <th className="mr-3">Время</th>
                                    <th className="mr-3">Логин менеджера</th>
                                    <th className="mr-3">Операция</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        history.map((e)=> {
                                            return (
                                                <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.date}</td>
                                                    <td>{e.time}</td>
                                                    <td>{e.managerLogin}</td>
                                                    <td>{e.operation}</td>
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
};

export default History;
