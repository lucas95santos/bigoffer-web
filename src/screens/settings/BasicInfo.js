import React, { useState, useCallback } from 'react';
// components
import { CustomInput as Input } from '../../components';

const BasicInfo = ({ settingsTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    complement: '',
    neighborhood: '',
    zipCode: '',
    city: '',
    uf: '',
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [field]: value,
    }));
  }, []);

  const onSaveInfo = useCallback((event) => {
    event.preventDefault();
    // TODO: implementar lógica de salvamento das informações
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      <form onSubmit={onSaveInfo}>
        <fieldset>
          <legend className="info-title">Informações pessoais</legend>

          <div className="input-container">
            <Input
              type="text"
              placeholder="Nome"
              classes="a-third-size"
              value={formData.name}
              onTextChange={(event) =>
                handleInputChange('name', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Email"
              classes="a-third-size"
              value={formData.email}
              onTextChange={(event) =>
                handleInputChange('email', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
          </div>
          <div className="input-container">
            <Input
              type="text"
              placeholder="Telefone"
              classes="a-quarter-size"
              value={formData.phone}
              onTextChange={(event) =>
                handleInputChange('phone', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend className="info-title">Endereço</legend>

          <div className="input-container">
            <Input
              type="text"
              placeholder="Rua"
              classes="half-size"
              value={formData.street}
              onTextChange={(event) =>
                handleInputChange('street', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Complemento"
              classes="a-quarter-size"
              value={formData.complement}
              onTextChange={(event) =>
                handleInputChange('complement', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Bairro"
              classes="half-size"
              value={formData.neighborhood}
              onTextChange={(event) =>
                handleInputChange('neighborhood', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
          </div>
          <div className="input-container">
            <Input
              type="text"
              placeholder="CEP"
              classes="a-quarter-size"
              value={formData.zipCode}
              onTextChange={(event) =>
                handleInputChange('zipCode', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Cidade"
              classes="half-size"
              value={formData.city}
              onTextChange={(event) =>
                handleInputChange('city', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Estado"
              classes="half-size"
              value={formData.uf}
              onTextChange={(event) =>
                handleInputChange('uf', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
          </div>
        </fieldset>

        <button className="solid" type="submit">
          Salvar informações
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
