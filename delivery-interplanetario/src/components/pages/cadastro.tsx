import React, { useState } from 'react';
import { useAddressContext } from '../../contexts/addressContext';
import { Address } from '../../models/address';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Label, Input, Select, Button, ButtonGroup } from '../../styles/cadastroStyle';

const CadastroEndereco: React.FC = () => {
  const { addAddress } = useAddressContext();
  const navigate = useNavigate();
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    id: Date.now().toString(),
    planet: 'Terra'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAddress.planet && (newAddress.city || newAddress.lot)) {
      addAddress(newAddress as Address);
      setNewAddress({
        id: Date.now().toString(),
        planet: 'Terra'
      });
      navigate('/pedido'); 
    }
  };

  return (
    <Container>
      <h2>Cadastro de Endereço</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Planeta:</Label>
        <Select value={newAddress.planet} onChange={(e) => setNewAddress({ ...newAddress, planet: e.target.value })}>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
        </Select>
        {newAddress.planet === 'Terra' && (
          <>
            <Label>Cidade:</Label>
            <Input type="text" value={newAddress.city || ''} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
            <Label>País:</Label>
            <Input type="text" value={newAddress.country || ''} onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })} />
          </>
        )}
        {newAddress.planet === 'Marte' && (
          <>
            <Label>Lote:</Label>
            <Input type="text" value={newAddress.lot || ''} onChange={(e) => setNewAddress({ ...newAddress, lot: e.target.value })} />
            <Label>Número do Lote:</Label>
            <Input type="text" value={newAddress.lotNumber || ''} onChange={(e) => setNewAddress({ ...newAddress, lotNumber: e.target.value })} />
          </>
        )}
        <ButtonGroup>
          <Button type="submit">Adicionar Endereço</Button>
          <Button type="button" onClick={() => navigate('/pedido')}>Próxima Página</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default CadastroEndereco;




