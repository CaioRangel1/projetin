import React from 'react';

const Mapa = () => {
  return (
    <div>
      <div style={{ height: '400px', width: '100%', position: 'relative' }}>
        <iframe
          title="Mapa OpenStreetMap"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-43.3247362%2C-23.0256903%2C-43.3047362%2C-22.9856903&amp;layer=mapnik"
        ></iframe>
      </div>
      <div style={{ backgroundColor: 'b', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
        <p style={{ fontSize: '20px', marginBottom: '10px', color: 'white' }}>Selecione seus filtros</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          {[1, 2, 3, 4, 5, 6].map((option) => (
            <select key={option} style={{ backgroundColor: 'white', margin: '0 10px', fontSize: '16px', padding: '8px', borderRadius: '8px' }}>
              <option value={option}>{`Opção ${option}`}</option>
            </select>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mapa;
