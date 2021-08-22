/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
// credit card
import CreditCard from 'react-credit-cards';
// components
import { CustomInput as Input } from '../../components';

const Payment = ({ settingsTitle }) => {
  // eslint-disable-next-line no-unused-vars
  const [creditCardData, setCreditCardData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });
  const [focus, setFocus] = useState('');

  const handleInputChange = useCallback((field, value) => {
    setCreditCardData((oldCreditCardData) => ({
      ...oldCreditCardData,
      [field]: value,
    }));
  }, []);

  const onSavePaymentOption = useCallback((event) => {
    event.preventDefault();
    // TODO: implementar lógica da opção de pagamento
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      <div className="payment-container">
        <form onSubmit={onSavePaymentOption}>
          <fieldset>
            <div className="input-container">
              <Input
                type="text"
                name="number"
                placeholder="Número do cartão"
                value={creditCardData.number}
                onTextChange={(event) =>
                  handleInputChange('number', event.target.value)
                }
                onFocus={setFocus}
                maxLength={16}
                errors={[]}
                autocomplete="nope"
              />
            </div>

            <div className="input-container">
              <Input
                type="text"
                name="name"
                placeholder="Nome no cartão"
                value={creditCardData.name}
                onTextChange={(event) =>
                  handleInputChange('name', event.target.value)
                }
                onFocus={setFocus}
                errors={[]}
                autocomplete="nope"
              />
            </div>

            <div className="input-container">
              <Input
                type="text"
                name="expiry"
                placeholder="Expiração"
                classes="half-size"
                value={creditCardData.expiry}
                onTextChange={(event) =>
                  handleInputChange('expiry', event.target.value)
                }
                onFocus={setFocus}
                maxLength={4}
                errors={[]}
                autocomplete="nope"
              />

              <Input
                type="text"
                name="cvc"
                placeholder="Código de segurança"
                classes="half-size"
                value={creditCardData.cvc}
                onTextChange={(event) =>
                  handleInputChange('cvc', event.target.value)
                }
                onFocus={setFocus}
                maxLength={3}
                errors={[]}
                autocomplete="nope"
              />
            </div>
          </fieldset>

          <button className="solid" type="submit">
            Salvar opção
          </button>
        </form>

        <div>
          <CreditCard
            cvc={creditCardData.cvc}
            expiry={creditCardData.expiry}
            name={creditCardData.name}
            number={creditCardData.number}
            focused={focus}
            placeholders={{
              name: 'Seu nome aqui',
            }}
            locale={{
              valid: 'válido até',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
