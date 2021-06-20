import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

import '../styles/components/Success.css';

const Sucess = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      console.log(location)
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 10 dias a tu direccion</span>
        <div className="Succes-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Sucess;
