import React, { useState } from 'react';
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BuyTarif from "../components/modals/BuyTarif";

const TarifCard = ({e, tarifInfo, bankInfo, onSetTarifInfo, onSetBankInfo}) => {
  const [buyTarifVisible, setBuyTarifVisible] = useState(false)
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
                  className='m-4'
              >
                  Текущий тариф
                  </Button>
              :
              <>
                  <Button
                      variant={"dark"}
                      className="m-4 p-2"
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
                      tarifInfo={tarifInfo}
                      onSetTarifInfo={onSetTarifInfo}
                      bankInfo={bankInfo}
                      onSetBankInfo={onSetBankInfo}
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