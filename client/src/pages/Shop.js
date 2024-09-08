import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useUsersStore} from '../state/state'

const Shop = observer(() => {
    //const {users} = useUsersStore(state=>state.users)
    //const addUser = useUsersStore(state => state.addUser)
    //addUser('user')
    //console.log(users)
    const {user} = useContext(Context)
    console.log('user', user.user)
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    type
                </Col>
                <Col md={9}>
                    brand
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
