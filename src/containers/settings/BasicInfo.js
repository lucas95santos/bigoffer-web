import React, { useState, useCallback } from 'react';
// components
import { CustomInput as Input } from '../../components';
// icons
import { FiMail, FiUser, FiPhone } from 'react-icons/fi';
import { RiProfileLine } from 'react-icons/ri';

const BasicInfo = ({ settingsTitle, user }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    street: user?.address?.street || '',
    complement: user?.address?.complement || '',
    neighborhood: user?.address?.neighborhood || '',
    zipCode: user?.address?.zipCode || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
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
              icon={FiUser}
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
              icon={FiMail}
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
              icon={FiPhone}
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
              icon={RiProfileLine}
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
              icon={RiProfileLine}
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
              icon={RiProfileLine}
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
              icon={RiProfileLine}
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
              icon={RiProfileLine}
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Estado"
              classes="half-size"
              value={formData.state}
              onTextChange={(event) =>
                handleInputChange('state', event.target.value)
              }
              icon={RiProfileLine}
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

export { BasicInfo };
