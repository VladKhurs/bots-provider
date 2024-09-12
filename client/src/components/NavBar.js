import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SETTINGS_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{display: "flex", flexWrap: "wrap", gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>LoyBOT</NavLink>
                {user.isAuth 
                    ?
                    <Nav style={{margin: '0 auto' ,color: 'white', display: "flex", flexWrap: "wrap", gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(PROFILE_ROUTE)}
                        >
                            Профиль
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(SETTINGS_ROUTE)}
                            className="ml-2"
                        >
                            Настройки
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
