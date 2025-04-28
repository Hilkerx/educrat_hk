import React, { useState } from 'react';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Maria Silva',
    email: 'maria.silva@example.com',
    purchases: [
      { id: 1, title: 'Curso React Básico', date: '10 de março de 2025' },
      { id: 2, title: 'Curso JavaScript Avançado', date: '15 de março de 2025' },
    ],
  });

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo, {userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>

      <h2>Suas Compras</h2>
      <ul>
        {userInfo.purchases.map((purchase) => (
          <li key={purchase.id}>
            {purchase.title} - {purchase.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
