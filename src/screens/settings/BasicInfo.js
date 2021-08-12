import React, { useState, useCallback } from 'react';
// components
import { CustomInput as Input } from '../../components';

const BasicInfo = ({ settingsTitle }) => {
  // eslint-disable-next-line no-unused-vars
  const [basicInfoData, setBasicInfoData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = useCallback((field, value) => {
    setBasicInfoData((oldBasicInfoData) => ({
      ...oldBasicInfoData,
      [field]: value,
    }));
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      <form>
        <fieldset className="personal-info">
          <legend className="info-title">Informações pessoais</legend>

          <div className="input-container">
            <Input
              type="text"
              placeholder="Nome"
              classes="a-third-size"
              value={basicInfoData.name}
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
              value={basicInfoData.email}
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
              value={basicInfoData.phone}
              onTextChange={(event) =>
                handleInputChange('phone', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
          </div>
        </fieldset>
        <fieldset className="address-info">
          <legend className="info-title">Endereço</legend>

          <div className="input-container">
            <Input
              type="text"
              placeholder="Rua"
              classes="half-size"
              value={basicInfoData.name}
              onTextChange={(event) =>
                handleInputChange('name', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Complemento"
              classes="a-quarter-size"
              value={basicInfoData.email}
              onTextChange={(event) =>
                handleInputChange('email', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Bairro"
              classes="half-size"
              value={basicInfoData.phone}
              onTextChange={(event) =>
                handleInputChange('phone', event.target.value)
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
              value={basicInfoData.name}
              onTextChange={(event) =>
                handleInputChange('name', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Cidade"
              classes="half-size"
              value={basicInfoData.email}
              onTextChange={(event) =>
                handleInputChange('email', event.target.value)
              }
              errors={[]}
              autocomplete="nope"
            />
            <Input
              type="text"
              placeholder="Estado"
              classes="half-size"
              value={basicInfoData.phone}
              onTextChange={(event) =>
                handleInputChange('phone', event.target.value)
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
