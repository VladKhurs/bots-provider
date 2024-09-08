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

const Setings = observer(() => {
    const {settings} = useContext(Context)
    console.log('tarif.tarif')
    const token = jwt_decode(localStorage.getItem('token'))
    const [isChanged, setIsChanged] = useState('')

    const onSetTarifInfo = async (state) => {
        settings.setTarifInfo(state)
        const allTarifs = await fetchAllTarifs()
        settings.setAllTarifs(allTarifs)
        setIsChanged(Date.now())
    }

    const onSetBankInfo = (state) => {
        settings.setBankInfo(state)
    }

    useEffect(async () => {
        try {
            const purchasedFunctions = await fetchPurchasedFunctions(token.id)
            settings.setPurchasedFunctions(purchasedFunctions)
            console.log(purchasedFunctions)
            const bankInfo = await fetchUserBank(token.id)
            settings.setBankInfo(bankInfo)
            console.log(bankInfo)
            const tarifInfoFetched = await fetchUserTarif(settings.bankInfo.tarifId)
            settings.setTarifInfo(tarifInfoFetched)
            console.log('tarifInfo', tarifInfoFetched)
            const extraFunctions = await fetchExtraFunctionsWhereTarif(settings.bankInfo.tarifId)
            settings.setExtraFunctions(extraFunctions)
            console.log('extraFunctions', extraFunctions)
            const allTarifs = await fetchAllTarifs()
            settings.setAllTarifs(allTarifs)
            console.log(allTarifs)
        } catch(e) {
            console.error(e)
        }
    }, [isChanged]);
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
                    {
                    }
                </div>
            }

            <div className='h5 mt-4 mb-4'>Подключить дополнительные функции: </div> 
            {
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
                                        tarifInfo={settings.tarifInfo}
                                        bankInfo={settings.bankInfo}
                                        onSetTarifInfo={onSetTarifInfo}
                                        onSetBankInfo={onSetBankInfo}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                }

        </Container>
    );
});

export default Setings;
