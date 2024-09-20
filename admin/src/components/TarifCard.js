import React, { useEffect, useState } from 'react';
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Context } from '..';
import BuyTarif from "../components/modals/BuyTarif";
import { fetchUserTarif } from '../http/tarifAPI';
import { useStore } from '../state/State';

const TarifCard = ({e, bankInfo}) => {
    const [buyTarifVisible, setBuyTarifVisible] = useState(false)
    const {setTarifInfo} = useStore()

    /*
    useEffect(async () => {
        const tarifInfoFetched = await fetchUserTarif(bankInfo.tarifId)
        setTarifInfo(tarifInfoFetched)
    }, []);
    */

    const tarifInfo = useStore((state)=> state.tarifInfo)
    console.log('eee', e)
    console.log('tarifInfoeee', tarifInfo)


    return (
        <Card className='mb-4'>
            <Card.Header as="h5">{e.name} тариф</Card.Header>
            <Card.Body>
                <Card.Title>Цена: {e.price} еу</Card.Title>
                <Card.Text>{e.description}</Card.Text>
                {
                    tarifInfo === '' 
                    ?
                    <Card.Text>Loading...</Card.Text>
                    :
                    tarifInfo.name === e.name 
                    ?
                    <Button 
                        variant="outline-dark" 
                        disabled 
                        className='mb-4 mt-4'
                    >
                        Текущий тариф
                    </Button>
                    :
                    <>
                        <Button
                            variant={"dark"}
                            className="mb-4 mt-4 p-2"
                            onClick={() => setBuyTarifVisible(true)}
                        >
                            Выбрать тариф
                        </Button>
                        <BuyTarif 
                            show={buyTarifVisible} 
                            onHide={() => setBuyTarifVisible(false)} 
                            price={e.price} 
                            period={e.period} 
                            userId={bankInfo.id}
                            tarifId={e.id}
                            bankInfo={bankInfo}
                        />
                    </>
                }
    
                {
                    e.functions === null 
                    ?
                    <></>
                    :
                    <div>
                        <Card.Title>Функциии включенные в тариф: </Card.Title>
                        {
                            JSON.parse(e.functions).map((el) => {
                                return (
                                    <Card.Text>{el.name}: {el.description}</Card.Text>
                                )
                            })
                        }
                    </div>
                }
                {
                    e.limits === null 
                    ?
                    <></>
                    :
                    <div>
                        <Card.Title className='h6'>Ограничения тарифа</Card.Title>
                        {
                            JSON.parse(e.limits).map((el) => {
                                return (
                                    <Card.Text>{el.name}: {el.value}</Card.Text>
                                )
                            })
                        }
                    </div>
                }
            </Card.Body>
        </Card>
        );
};

export default TarifCard;