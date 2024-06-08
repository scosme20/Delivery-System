import React, { useState, useEffect } from 'react';
import { useDeliveryContext } from '../../contexts/deliveryContext';
import { useAddressContext } from '../../contexts/addressContext';
import { Delivery } from '../../models/delivery';
import { Address } from '../../models/address';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Header, Form, Label, Input, Select, Button, ButtonGroup } from '../../styles/edicaoStyles';

const EdicaoGeral: React.FC = () => {
  const { deliveries, updateDelivery, deleteDelivery } = useDeliveryContext();
  const { addresses, updateAddress, deleteAddress } = useAddressContext();
  const navigate = useNavigate();
  const [editedDeliveries, setEditedDeliveries] = useState<Delivery[]>([]);
  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setEditedDeliveries(deliveries);
  }, [deliveries]);

  const handleInputChange = (id: string, field: keyof Delivery, value: any) => {
    setEditedDeliveries((prev) =>
      prev.map((delivery) =>
        delivery.id === id ? { ...delivery, [field]: value } : delivery
      )
    );
  };

  const handleSave = (id: string) => {
    const updatedDelivery = editedDeliveries.find((delivery) => delivery.id === id);
    if (updatedDelivery) {
      updateDelivery(updatedDelivery);
    }
    setIsEditing({ ...isEditing, [id]: false });
  };

  const handleDeleteDelivery = (id: string) => {
    deleteDelivery(id);
    setEditedDeliveries(editedDeliveries.filter((delivery) => delivery.id !== id));
  };

  const getAddressDescription = (addressId: string | undefined) => {
    if (!addressId) return "Endereço não encontrado";
    const address = addresses.find((address) => address.id === addressId);
    return address
      ? address.city || address.lot
      : "Endereço não encontrado";
  };

  return (
    <Container>
      <h2>Edição Geral</h2>
      <Section>
        <h3>Edição de Pedidos</h3>
        {editedDeliveries.map((delivery) => {
          const fromAddress = addresses.find((address) => address.id === delivery.from);
          const toAddress = addresses.find((address) => address.id === delivery.to);

          return (
            <div key={delivery.id}>
              <Header>Pedido ID: {delivery.id}</Header>
              {isEditing[delivery.id] ? (
                <Form onSubmit={(e) => { e.preventDefault(); handleSave(delivery.id); }}>
                  <Label>Origem:</Label>
                  <Select
                    value={delivery.from}
                    onChange={(e) => handleInputChange(delivery.id, 'from', e.target.value)}
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
                    value={delivery.to}
                    onChange={(e) => handleInputChange(delivery.id, 'to', e.target.value)}
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
                    value={delivery.type}
                    onChange={(e) => handleInputChange(delivery.id, 'type', e.target.value)}
                  />
                  <Label>Data do Pedido:</Label>
                  <Input
                    type="date"
                    value={delivery.orderDate}
                    onChange={(e) => handleInputChange(delivery.id, 'orderDate', e.target.value)}
                  />
                  <Label>Horário de Saída:</Label>
                  <Input
                    type="time"
                    value={delivery.departureTime}
                    onChange={(e) => handleInputChange(delivery.id, 'departureTime', e.target.value)}
                  />
                  <Label>Horário de Entrega:</Label>
                  <Input
                    type="time"
                    value={delivery.deliveryTime}
                    onChange={(e) => handleInputChange(delivery.id, 'deliveryTime', e.target.value)}
                  />

                  <ButtonGroup>
                    <Button type="button" onClick={() => setIsEditing({ ...isEditing, [delivery.id]: false })}>Cancelar</Button>
                    <Button type="submit">Salvar</Button>
                  </ButtonGroup>
                </Form>
              ) : (
                <div>
                  <p>Origem: {fromAddress ? `${fromAddress.city || fromAddress.lot} (${fromAddress.planet})` : "Endereço de origem não encontrado"}</p>
                  <p>Destino: {toAddress ? `${toAddress.city || toAddress.lot} (${toAddress.planet})` : "Endereço de destino não encontrado"}</p>
                  <div>
                    <ButtonGroup>
                      <Button type="button" onClick={() => setIsEditing({ ...isEditing, [delivery.id]: true })}>Editar</Button>
                      <Button type="button" onClick={() => handleDeleteDelivery(delivery.id)}>Deletar Pedido</Button>
                    </ButtonGroup>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Section>
      <ButtonGroup>
        <Button type="button" onClick={() => navigate(-1)}>Página Anterior</Button>
        <Button type="button" onClick={() => navigate('/')}>Próxima Página</Button>
      </ButtonGroup>
    </Container>
  );
};

export default EdicaoGeral;


