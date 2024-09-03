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

const Setings = observer(() => {
    const [purchasedFunctions, setPurchasedFunctions] = useState('')
    const [tarifInfo, setTarifInfo] = useState('')
    const [allTarifs, setAllTarifs] = useState('')
    const [bankInfo, setBankInfo] = useState('')
    const [extraFunctions, setExtraFunctions] = useState('')
    const token = jwt_decode(localStorage.getItem('token'))
    useEffect(async () => {
        try {
            const purchasedFunctions = await fetchPurchasedFunctions(token.id)
            setPurchasedFunctions(purchasedFunctions)
            console.log(purchasedFunctions)
            const bankInfo = await fetchUserBank(token.id)
            setBankInfo(bankInfo)
            console.log(bankInfo)
            const tarifInfo = await fetchUserTarif(bankInfo.tarifId)
            setTarifInfo(tarifInfo)
            console.log(tarifInfo)
            const extraFunctions = await fetchExtraFunctionsWhereTarif(bankInfo.tarifId)
            setExtraFunctions(extraFunctions)
            console.log(extraFunctions)
            const allTarifs = await fetchAllTarifs()
            setAllTarifs(allTarifs)
            console.log(allTarifs)
        } catch(e) {
            console.error(e)
        }
    }, []);
    return (
        <Container>
            {
                purchasedFunctions === ''
                ?
                <div>Loading...</div>
                :
                purchasedFunctions.length === 0
                ?
                <div>
                    <div className='h5 mt-4'>Подключенные дополнительные функции</div>
                    <div>Вы еще не приобретали дополнительные функции</div>
                </div>
                :
                <div>
                    <div className='h5 mt-4'>Подключенные дополнительные функции: </div>
                    {
                    }
                </div>
            }

            <div className='h5 mt-4'>Подключить дополнительные функции: </div> 
            {
                extraFunctions.length === 0
                ?
                <div>На вашем тарифе "{tarifInfo.name}" нельзя подключить дополнительные функции</div>
                :
                <div>Functions list</div>
            }

            <div className='h5 mt-4'>Достурные тарифы</div> 

                {   
                    allTarifs === ''
                    ?
                    <div>Loading...</div>
                    :
                    allTarifs.map((e) => (
                        <div>
                            <div className='h5'>{e.name} тариф</div>
                            <div>Цена: {e.price} уе</div>
                            <div>{e.description}</div>
                            {
                                e.functions === null 
                                ?
                                <div className='h6'>У терифа нет включенных в него функций</div>
                                :
                                <div>
                                    <div className='h6'>Функциии включенные в тариф: </div>
                                    {
                                        JSON.parse(e.functions).map((el) => {
                                            return (
                                                <div>{el.name}: {el.description}</div>
                                            )
                                        })
                                    }
                                </div>
                            }
                            {
                                e.limits === null 
                                ?
                                <div className='h6'>У тарифа нет ограничений</div>
                                :
                                <div>
                                    <div className='h6'>Ограничения тарифа</div>
                                    {
                                        JSON.parse(e.limits).map((el) => {
                                            return (
                                                <div>{el.name}: {el.value}</div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
        </Container>
    );
});

export default Setings;
