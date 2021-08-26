import React, { useState, useCallback } from 'react';
// components
import { CustomInput as Input } from '../../components';
// icons
import { FiLock } from 'react-icons/fi';

const Security = ({ settingsTitle }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [field]: value,
    }));
  }, []);

  const onSavePassword = useCallback((event) => {
    event.preventDefault();
    // TODO: implementar lógica da alteração de senha
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      <form onSubmit={onSavePassword}>
        <fieldset>
          <legend className="info-title">Alterar senha</legend>

          <div className="input-container">
            <Input
              type="text"
              placeholder="Senha atual"
              classes="a-quarter-size"
              value={formData.currentPassword}
              onTextChange={(event) =>
                handleInputChange('currentPassword', event.target.value)
              }
              icon={FiLock}
              errors={[]}
              autocomplete="nope"
            />
          </div>
          <div className="input-container">
            <Input
              type="text"
              placeholder="Nova senha"
              classes="a-quarter-size"
              value={formData.password}
              onTextChange={(event) =>
                handleInputChange('password', event.target.value)
              }
              icon={FiLock}
              errors={[]}
              autocomplete="nope"
            />
          </div>
          <div className="input-container">
            <Input
              type="text"
              placeholder="Confirme a nova senha"
              classes="a-quarter-size"
              value={formData.confirmPassword}
              onTextChange={(event) =>
                handleInputChange('confirmPassword', event.target.value)
              }
              icon={FiLock}
              errors={[]}
              autocomplete="nope"
            />
          </div>
        </fieldset>

        <button className="solid" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
};

export { Security };
