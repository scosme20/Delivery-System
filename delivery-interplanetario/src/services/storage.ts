import { Address } from '../models/address';
import { Delivery } from '../models/delivery';

const ADDRESSES_KEY = 'addresses';
const DELIVERIES_KEY = 'deliveries';

export const getAddresses = (): Address[] => {
  const storedAddresses = localStorage.getItem(ADDRESSES_KEY);
  return storedAddresses ? JSON.parse(storedAddresses) : [];
};

export const saveAddresses = (addresses: Address[]): void => {
  localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
};

export const getDeliveries = (): Delivery[] => {
  const storedDeliveries = localStorage.getItem(DELIVERIES_KEY);
  return storedDeliveries ? JSON.parse(storedDeliveries) : [];
};

export const saveDeliveries = (deliveries: Delivery[]): void => {
  localStorage.setItem(DELIVERIES_KEY, JSON.stringify(deliveries));
};

