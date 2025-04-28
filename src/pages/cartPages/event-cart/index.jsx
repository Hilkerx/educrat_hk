import React from 'react';

const EventCart = () => {
  const eventItems = [
    { id: 1, title: 'Workshop de React', price: 50 },
    { id: 2, title: 'Palestra sobre JavaScript', price: 30 },
  ];

  const total = eventItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="event-cart-container">
      <h1>Carrinho de Ingressos</h1>
      <ul>
        {eventItems.map((item) => (
          <li key={item.id}>
            {item.title} - R${item.price}
          </li>
        ))}
      </ul>
      <div className="total">
        <h2>Total: R${total}</h2>
      </div>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default EventCart;
