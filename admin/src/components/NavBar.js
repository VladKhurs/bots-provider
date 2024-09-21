import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, CLIENTS_ROUTE, BOTS_ROUTE, HISTORY_ROUTE,} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import { useStore } from '../state/State';
const NavBar = observer(() => {
    const isAuthState = useStore((state) => state.isAuth);
    const { setUser, setIsAuth } = useStore()
    const history = useHistory()

    const logOut = () => {
        setUser({})
        setIsAuth(false)
    }

    

    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{display: "flex", flexWrap: "wrap", gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
                <NavLink style={{color:'white'}} to={ADMIN_ROUTE}>LoyBOT</NavLink>
                {isAuthState ?
                    <Nav style={{margin: '0 auto' ,color: 'white', display: "flex", flexWrap: "wrap", gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(CLIENTS_ROUTE)}
                        >
                            Клиенты
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(BOTS_ROUTE)}
                        >
                            Боты
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(HISTORY_ROUTE)}
                        >
                            История операций
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
