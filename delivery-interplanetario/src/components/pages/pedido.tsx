import React, { useState } from 'react';
import { useDeliveryContext } from '../../contexts/deliveryContext';
import { useAddressContext } from '../../contexts/addressContext';
import { Delivery } from '../../models/delivery';
import { Container, Form, Label, Input, Select, Button, ButtonGroup } from '../../styles/cadastroStyle';
import { useNavigate } from 'react-router-dom';

const CadastroPedido: React.FC = () => {
  const { addDelivery } = useDeliveryContext();
  const { addresses } = useAddressContext();
  const navigate = useNavigate();
  const [newDelivery, setNewDelivery] = useState<Partial<Delivery>>({
    from: '',
    to: '',
    type: '',
    orderDate: '',
    departureTime: '',
    deliveryTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDelivery.from && newDelivery.to && newDelivery.type) {
      addDelivery(newDelivery as Delivery);
      setNewDelivery({
        from: '',
        to: '',
        type: '',
        orderDate: '',
        departureTime: '',
        deliveryTime: ''
      });
      navigate('/edicao');
    }
  };

  return (
    <Container>
      <h2>Cadastro de Pedido</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Origem:</Label>
        <Select
          value={newDelivery.from}
          onChange={(e) => setNewDelivery({ ...newDelivery, from: e.target.value })}
        >
          <option value="">Selecione uma origem</option>
          {addresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.city || address.lot}
            </option>
          ))}
        </Select>
        <Label>Destino:</Label>
        <Select
          value={newDelivery.to}
          onChange={(e) => setNewDelivery({ ...newDelivery, to: e.target.value })}
        >
          <option value="">Selecione um destino</option>
          {addresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.city || address.lot}
            </option>
          ))}
        </Select>
        <Label>Tipo de Pedido:</Label>
        <Input
          type="text"
          value={newDelivery.type}
          onChange={(e) => setNewDelivery({ ...newDelivery, type: e.target.value })}
        />
        <Label>Data do Pedido:</Label>
        <Input
          type="date"
          value={newDelivery.orderDate}
          onChange={(e) => setNewDelivery({ ...newDelivery, orderDate: e.target.value })}
        />
        <Label>Horário de Saída:</Label>
        <Input
          type="time"
          value={newDelivery.departureTime}
          onChange={(e) => setNewDelivery({ ...newDelivery, departureTime: e.target.value })}
        />
        <Label>Horário de Entrega:</Label>
        <Input
          type="time"
          value={newDelivery.deliveryTime}
          onChange={(e) => setNewDelivery({ ...newDelivery, deliveryTime: e.target.value })}
        />
        <ButtonGroup>
          <Button type="submit">Adicionar Pedido</Button>
          <Button type="button" onClick={() => navigate(-1)}>Página Anterior</Button>
          <Button type="button" onClick={() => navigate('/edicao')}>Próxima Página</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default CadastroPedido;


