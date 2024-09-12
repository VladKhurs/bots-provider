import React, {useContext, useState, useEffect} from 'react';
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

const AboutClient = observer(() => {
    const {settings} = useContext(Context)
    const {id} = useParams()
    const [isChanged, setIsChanged] = useState('')

    useEffect(async () => {
        try {
            const purchasedFunctions = await fetchPurchasedFunctions(id)
            settings.setPurchasedFunctions(purchasedFunctions)
            const bankInfo = await fetchUserBank(id)
            settings.setBankInfo(bankInfo)
            const tarifInfoFetched = await fetchUserTarif(settings.bankInfo.tarifId)
            settings.setTarifInfo(tarifInfoFetched)
            const extraFunctions = await fetchExtraFunctionsWhereTarif(settings.bankInfo.tarifId)
            settings.setExtraFunctions(extraFunctions)
            const allTarifs = await fetchAllTarifs()
            settings.setAllTarifs(allTarifs)
        } catch(e) {
            console.error(e)
        }
    }, [settings.isChanged]);
    return (
        <Container>
            {
                settings.purchasedFunctions === ''
                ?
                <div>Loading...</div>
                :
                settings.purchasedFunctions.length === 0
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
                settings.extraFunctionsToBuy.length === 0
                ?
                <div>Вы подключили все имеющиеся дополнительные функции</div>
                :
                settings.extraFunctions.length === 0
                ?
                <div>На вашем тарифе "{settings.tarifInfo.name}" нельзя подключить дополнительные функции</div>
                :
                <ExtraFunctions
                    extraFunctions={settings.extraFunctions}
                    bankInfo={settings.bankInfo}
                />
            }

            <div className='h5 m-4 d-flex' >Достурные тарифы</div> 
                {   
                    settings.allTarifs === ''
                    ?
                    <div>Loading...</div>
                    :
                    <Row>
                        {
                            settings.allTarifs.map((e) => (
                                <Col>
                                    <TarifCard
                                        e={e}
                                        bankInfo={settings.bankInfo}
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
