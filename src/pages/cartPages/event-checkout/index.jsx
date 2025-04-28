import React, { useState } from 'react';

const EventCheckout = () => {
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compra de ingresso realizada com sucesso!');
  };

  return (
    <div className="event-checkout-container">
      <h1>Checkout de Ingressos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="cardNumber">Número do Cartão</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="expiryDate">Data de Validade</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default EventCheckout;
