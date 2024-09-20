import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {check} from "./http/adminAPI";
import {Spinner} from "react-bootstrap";
import { useStore } from './state/State';

const App = observer(() => {
    const {setUser, setIsAuth} = useStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            setUser(true)
            setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
