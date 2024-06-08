import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CadastroEndereco from '../components/pages/cadastro';
import EdicaoEndereco from '../components/pages/edicao';
import CadastroPedido from '../components/pages/pedido';
import { DeliveryProvider } from '../contexts/deliveryContext';
import { AddressProvider } from '../contexts/addressContext';

const router = createBrowserRouter([
  { path: '/', element: <CadastroEndereco /> },
  { path: '/cadastro', element: <CadastroEndereco /> },
  { path: '/edicao', element: <EdicaoEndereco /> },
  { path: '/pedido', element: <CadastroPedido /> },
]);

const AppRouter = () => {
  return (
    <DeliveryProvider>
      <AddressProvider>
        <RouterProvider router={router} />
      </AddressProvider>
    </DeliveryProvider>
  );
};

export default AppRouter;

