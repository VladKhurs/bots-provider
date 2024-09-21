import React, {useState, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import { fetchUserTarif,  fetchAllTarifs} from '../http/tarifAPI';
import { fetchUserBank } from '../http/userBankAPI';
import { fetchExtraFunctions, fetchExtraFunctionsWhereTarif } from '../http/extraFunctionAPI';
import { fetchPurchasedFunctions } from '../http/userBankAPI';
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BuyExtraFunction from '../components/modals/BuyExtraFunction';
import ExtraFunctions from '../components/ExtraFunctions';
import TarifCard from '../components/TarifCard';
import {Context} from '../index'
import DisableExtraFunctions from '../components/DisableExtraFunctions';
import { userInfoOne } from '../http/userInfoAPI';
import { useParams } from 'react-router-dom';
import { useStore } from '../state/State';

const AboutClient = observer(() => {
    const {id} = useParams()
    const store = useStore()
    const bankInfo = useStore((state) => state.bankInfo);
    const purchasedFunctions = useStore((state) => state.purchasedFunctions);
    const extraFunctionsToBuy = useStore((state) => state.extraFunctionsToBuy);
    const extraFunctions = useStore((state) => state.extraFunctions);
    const tarifInfo = useStore((state) => state.tarifInfo);
    const {allTarifs} = store
    const isChanged = useStore((state) => state.isChanged);
    const {
        setPurchasedFunctions, 
        setBankInfo, 
        setTarifInfo, 
        setExtraFunctions,
        setAllTarifs,
    } = useStore()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const purchasedFunctions = await fetchPurchasedFunctions(id);
                setPurchasedFunctions(purchasedFunctions);
                const bankInfo = await fetchUserBank(id);
                setBankInfo(bankInfo);
                const tarifInfoFetched = await fetchUserTarif(bankInfo.tarifId);
                setTarifInfo(tarifInfoFetched);
                const extraFunctions = await fetchExtraFunctionsWhereTarif(bankInfo.tarifId);
                setExtraFunctions(extraFunctions);
                const allTarifs = await fetchAllTarifs();
                setAllTarifs(allTarifs);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                //const purchasedFunctions = await fetchPurchasedFunctions(id);
                //setPurchasedFunctions(purchasedFunctions);
                const bankInfo = await fetchUserBank(id);
                setBankInfo(bankInfo);
                const tarifInfoFetched = await fetchUserTarif(bankInfo.tarifId);
                setTarifInfo(tarifInfoFetched);
                const extraFunctions = await fetchExtraFunctionsWhereTarif(bankInfo.tarifId);
                setExtraFunctions(extraFunctions);
                const allTarifs = await fetchAllTarifs();
                setAllTarifs(allTarifs);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [isChanged]);*/

    return (
        <Container>
            {
                purchasedFunctions === ''
                ?
                <div>Loading...</div>
                :
                purchasedFunctions.length === 0
                ?
                <></>
                :
                <div>
                    <div className='h5 mt-4'>Подключенные дополнительные функции: </div>
                    <DisableExtraFunctions
                    />
                </div>
            }

            <div className='h5 mt-4 mb-4'>Подключить дополнительные функции: </div> 
            {
                extraFunctionsToBuy.length === 0
                ?
                <div>Вы подключили все имеющиеся дополнительные функции</div>
                :
                extraFunctions.length === 0
                ?
                <div>На вашем тарифе "{tarifInfo.name}" нельзя подключить дополнительные функции</div>
                :
                <ExtraFunctions
                    extraFunctions={extraFunctions}
                    bankInfo={bankInfo}
                />
            }

            <div className='h5 m-4 d-flex' >Достурные тарифы</div> 
                {   
                    allTarifs === ''
                    ?
                    <div>Loading...</div>
                    :
                    <Row>
                        {
                            allTarifs.map((e) => (
                                <Col>
                                    <TarifCard
                                        e={e}
                                        bankInfo={bankInfo}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                }
        </Container>
    );
});

export default AboutClient;
