import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { Address } from '../models/address';
import { getAddresses, saveAddresses } from '../services/storage';

interface AddressContextProps {
  addresses: Address[];
  addAddress: (address: Address) => void;
  updateAddress: (address: Address) => void;
  deleteAddress: (id: string) => void;
}

const AddressContext = createContext<AddressContextProps | undefined>(undefined);

export const AddressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const fetchedAddresses = getAddresses();
    setAddresses(fetchedAddresses);
  }, []);

  const addAddress = (address: Address) => {
    const updatedAddresses = [...addresses, address];
    setAddresses(updatedAddresses);
    saveAddresses(updatedAddresses);
  };

  const updateAddress = (updatedAddress: Address) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === updatedAddress.id ? updatedAddress : address
    );
    setAddresses(updatedAddresses);
    saveAddresses(updatedAddresses);
  };

  const deleteAddress = (id: string) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    saveAddresses(updatedAddresses);
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, updateAddress, deleteAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddressContext must be used within an AddressProvider');
  }
  return context;
};
