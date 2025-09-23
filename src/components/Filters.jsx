import React from 'react';

export default function Filters() {
  return (
    <section style={{ padding: '1rem', backgroundColor: '#f2f2f2' }}>
      <h2>Filtros</h2>
      {/* Aquí irían los controles de filtro en el futuro */}
      <div>
        <input type="text" placeholder="Buscar libro..." disabled />
        <select disabled>
          <option>Todos los géneros</option>
        </select>
      </div>
    </section>
  );
}