/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
// credit card
import CreditCard from 'react-credit-cards';
// components
import { CustomInput as Input } from '../../components';
// icons
import { AiOutlineFieldNumber, AiOutlineIdcard } from 'react-icons/ai';
import { MdDateRange } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
// assets
import fakeCreditCardImg from '../../assets/credit-cards/master.png';

const payment = {
  LIST_OPTIONS: 0,
  ADD_OPTION: 1,
};

const Payment = ({ settingsTitle }) => {
  // eslint-disable-next-line no-unused-vars
  const [creditCardData, setCreditCardData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });
  const [focus, setFocus] = useState('');
  const [currentContent, setCurrentContent] = useState(payment.LIST_OPTIONS);

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

  const onCancelPaymentOption = useCallback(() => {
    setCreditCardData({
      cvc: '',
      expiry: '',
      name: '',
      number: '',
    });

    setCurrentContent(payment.LIST_OPTIONS);
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      {currentContent === payment.ADD_OPTION ? (
        <div className="add-payment">
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
                  icon={AiOutlineFieldNumber}
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
                  icon={AiOutlineIdcard}
                  errors={[]}
                  uppercase
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
                  icon={MdDateRange}
                  errors={[]}
                  autocomplete="nope"
                />

                <Input
                  type="text"
                  name="cvc"
                  placeholder="CVV"
                  classes="half-size"
                  value={creditCardData.cvc}
                  onTextChange={(event) =>
                    handleInputChange('cvc', event.target.value)
                  }
                  onFocus={setFocus}
                  maxLength={3}
                  icon={FiLock}
                  errors={[]}
                  autocomplete="nope"
                />
              </div>
            </fieldset>

            <footer className="add-payment-footer">
              <button className="solid" type="submit">
                Salvar opção
              </button>
              <button
                type="button"
                className="outlined cancel"
                onClick={onCancelPaymentOption}
              >
                Cancelar
              </button>
            </footer>
          </form>

          <div className="credit-card">
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
      ) : (
        <ul className="payment-options">
          <li>
            <div className="option">
              <img src={fakeCreditCardImg} alt="" className="option__image" />
              <p className="option__number">
                <strong>**** **** ****</strong> 8302
              </p>
              <small>Expira em 02/30</small>
            </div>
            <button type="button" className="outlined no-border">
              Remover
            </button>
          </li>
          <li className="new-option">
            <button
              type="button"
              className="outlined"
              onClick={() => setCurrentContent(payment.ADD_OPTION)}
            >
              Adicionar nova opção
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Payment;
