import React, { useState, useCallback } from 'react';
// components
import { CustomInput as Input } from '../components';
// icons
import { RiLockPasswordLine, RiProfileLine } from 'react-icons/ri';
import { FiCreditCard } from 'react-icons/fi';

const settings = {
  BASIC_INFO: {
    code: 0,
    title: 'Informações básicas',
    icon: <RiProfileLine />,
  },
  SECURITY: {
    code: 1,
    title: 'Segurança',
    icon: <RiLockPasswordLine />,
  },
  PAYMENT: {
    code: 2,
    title: 'Opções de pagamento',
    icon: <FiCreditCard />,
  },
};

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

const Security = ({ settingsTitle }) => (
  <div>
    <h2>{settingsTitle}</h2>
  </div>
);

const Payment = ({ settingsTitle }) => (
  <div>
    <h2>{settingsTitle}</h2>
  </div>
);

const Settings = () => {
  // state
  const [currentSetting, setCurrentSetting] = useState(
    settings.BASIC_INFO.code,
  );

  // renders
  const renderSettingsMenu = useCallback(
    () => (
      <ul>
        {Object.keys(settings).map((type) => (
          <li
            key={settings[type].code}
            className={currentSetting === settings[type].code ? 'active' : null}
            onClick={() => setCurrentSetting(settings[type].code)}
          >
            {settings[type].icon}
            {settings[type].title}
          </li>
        ))}
      </ul>
    ),
    [currentSetting],
  );

  const renderSettingsInfo = useCallback(() => {
    switch (currentSetting) {
      case settings.SECURITY.code:
        return <Security settingsTitle={settings.SECURITY.title} />;
      case settings.PAYMENT.code:
        return <Payment settingsTitle={settings.PAYMENT.title} />;
      case settings.BASIC_INFO.code:
      default:
        return <BasicInfo settingsTitle={settings.BASIC_INFO.title} />;
    }
  }, [currentSetting]);

  return (
    <section className="settings">
      <div className="container">
        <h1>Configurações</h1>

        <div className="settings__content">
          <aside className="settings__menu">{renderSettingsMenu()}</aside>
          <main className="settings__info">{renderSettingsInfo()}</main>
        </div>
      </div>
    </section>
  );
};

export { Settings };
