import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, ADMIN_ROUTE} from "../utils/consts";
import {loginAdmin} from "../http/adminAPI";
import {observer} from "mobx-react-lite";
import { useStore } from '../state/State';
import LoginForm from '../components/LoginForm/LoginForm'

const Auth = observer(() => {
    const userFetched = useStore((state) => state.user);
    const { setUser, setIsAuth, setAdminInfo } = useStore()
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            console.log('login, password', login, password)
            const data = await loginAdmin(login, password);
            setUser(userFetched)
            setIsAuth(true)
            console.log('loginAdmin', data)
            setAdminInfo({id: null, login: login})
            history.push(ADMIN_ROUTE)
            console.log('data', data)
        } catch (e) {
            alert(e.response.data.message)
            console.log('error', e)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш login..."
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
