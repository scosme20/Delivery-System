export interface Address {
  id: string;
  locationCode: string;
  description: string;
  type: 'origem' | 'destino'; 
}
