import React from 'react';

const Eventos2 = () => {
  const events = [
    { id: 1, title: 'Workshop de React', date: '20 de abril de 2025', location: 'São Paulo' },
    { id: 2, title: 'Palestra sobre JavaScript', date: '25 de abril de 2025', location: 'Rio de Janeiro' },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div className="eventos-container">
      <h1>Eventos</h1>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <h2>{event.title}</h2>
            <p>{event.date} - {event.location}</p>
            <a href={`/event-cart/${event.id}`}>Comprar Ingresso</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos2;
  