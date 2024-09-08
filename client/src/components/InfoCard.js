import React from 'react';

const InfoCard = ({name, value}) => {
  return (
    <div className='d-flex'>
      <div className="mr-2">{name}</div>
      <div>{value}</div>
  </div>
  );
};

export default InfoCard;