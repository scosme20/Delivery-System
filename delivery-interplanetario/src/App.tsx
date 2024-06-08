import React from 'react';
import Routes from './routes/routes';
import { AddressProvider } from './contexts/addressContext';
import { DeliveryProvider } from './contexts/deliveryContext'; 

const App: React.FC = () => {
  return (
    <DeliveryProvider>
      <AddressProvider> 
          <Routes />
      </AddressProvider>
    </DeliveryProvider>
  );
};

export default App;



