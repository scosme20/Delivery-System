import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { Delivery } from '../models/delivery';
import { getDeliveries, saveDeliveries } from '../services/storage';

interface DeliveryContextProps {
  deliveries: Delivery[];
  addDelivery: (delivery: Delivery) => void;
  updateDelivery: (delivery: Delivery) => void;
  deleteDelivery: (id: string) => void;
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(undefined);

export const DeliveryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  useEffect(() => {
    const fetchedDeliveries = getDeliveries();
    setDeliveries(fetchedDeliveries);
  }, []);

  const addDelivery = (delivery: Delivery) => {
    const updatedDeliveries = [...deliveries, delivery];
    setDeliveries(updatedDeliveries);
    saveDeliveries(updatedDeliveries);
  };

  const updateDelivery = (updatedDelivery: Delivery) => {
    const updatedDeliveries = deliveries.map((delivery) =>
      delivery.id === updatedDelivery.id ? updatedDelivery : delivery
    );
    setDeliveries(updatedDeliveries);
    saveDeliveries(updatedDeliveries);
  };

  const deleteDelivery = (id: string) => {
    const updatedDeliveries = deliveries.filter((delivery) => delivery.id !== id);
    setDeliveries(updatedDeliveries);
    saveDeliveries(updatedDeliveries);
  };

  return (
    <DeliveryContext.Provider value={{ deliveries, addDelivery, updateDelivery, deleteDelivery }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDeliveryContext = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDeliveryContext must be used within a DeliveryProvider');
  }
  return context;
};
