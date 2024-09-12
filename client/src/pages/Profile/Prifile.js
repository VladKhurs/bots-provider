import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { userInfoOne } from '../../http/userInfoAPI';
import jwt_decode from "jwt-decode";
import classes from './profile.module.scss'
import { fetchUserTarif } from '../../http/tarifAPI';
import { fetchUserBank } from '../../http/userBankAPI';
import InfoCard from '../../components/InfoCard';
import { fetchExtraFunctions } from '../../http/extraFunctionAPI';
import { fetchPurchasedFunctions } from '../../http/userBankAPI';

const Profile = () => {
    const [userInfo, setUserInfo] = useState('')
    const [tarifInfo, setTarifInfo] = useState('')
    const [bankInfo, setBankInfo] = useState('')
    //const [extraFunctions, setExtraFunctions] = useState('')
    const [purchasedFunctions, setPurchasedFunctions] = useState('')
    const token = jwt_decode(localStorage.getItem('token'))
    useEffect(async () => {
        try {
            const userInfo = await userInfoOne(token.email)
            setUserInfo(userInfo)
            const tarifInfo = await fetchUserTarif(userInfo.tarifId)
            setTarifInfo(tarifInfo)
            const bankInfo = await fetchUserBank(token.id)
            setBankInfo(bankInfo)
            console.log('bankInfo', bankInfo)
            const purchasedFunctions = await fetchPurchasedFunctions(token.id)
            setPurchasedFunctions(purchasedFunctions)
            console.log('purchasedFunctions', purchasedFunctions)
            //const extraFunctions = await fetchExtraFunctions()
            //setExtraFunctions(extraFunctions)
            //console.log(extraFunctions)
        } catch(e) {
            console.error(e)
        }
    }, []);

    return (
        <Container className="d-flex flex-column">
            {
                userInfo === '' ?
                <div>Loading...</div>
                : 
                <div>
                    <InfoCard name={'Имя:'} value={userInfo.userName}/>
                    <InfoCard name={'Почта:'} value={userInfo.email}/>
                    <InfoCard name={'Название компании:'} value={userInfo.companyName}/>
                    <InfoCard name={'Телефон компании:'} value={userInfo.companyPhone}/>
                    <InfoCard name={'Адрес компании:'} value={userInfo.companyAddress}/>
                </div>
            }
            {
                tarifInfo === '' ?
                <div>Loading...</div>
                :
                <div>
                    <div className='h5 mt-4'>
                        Информация о тарифе
                    </div>
                    <InfoCard name={'Название тарифа:'} value={tarifInfo.name}/>
                    <InfoCard name={'Описание тарифа:'} value={tarifInfo.description}/>
                    {
                        
                        tarifInfo.functions === null 
                        ?
                        <></>
                        :
                        <div>
                            <div className='h5 mt-4'>Функциии включенные в тариф </div>
                            {
                                JSON.parse(tarifInfo.functions).map((e) => {
                                    return (
                                        <div>{e.name}: {e.description}</div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        tarifInfo.limits === null 
                        ?
                        <></>
                        :
                        <div>
                            <div className='h5 mt-4'>Ограничения тарифа</div>
                            {
                                JSON.parse(tarifInfo.limits).map((e) => {
                                    return (
                                        <div>{e.name}: {e.value}</div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div>Срок действия тарифа: {tarifInfo.period} дней</div>
                    <div>Цена тарифа: {tarifInfo.price} уе</div>
                    <div>Текущий тариф: {tarifInfo.name}</div>
                    <div>Средств на счете: {bankInfo.money} уе</div>
                </div>
            }

            {
                purchasedFunctions === ''
                ?
                <div>Loading...</div>
                :
                purchasedFunctions.length === 0
                ?
                <div>
                    <div className='h5 mt-4'>Подключенные дополнительные функции</div>
                    <div>Вы ещё не приобрели дополнительные функции</div>
                </div>
                :
                <div>
                    <div className='h5 mt-4'>Подключенные функции: </div>
                    {
                    }
                </div>
            }
        </Container>
    );
};

export default Profile;

/*

                purchasedFunctions === '' 
                ?
                <div>Loading...</div>
                :

*/