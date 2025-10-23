import React from 'react';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#000',
        color: '#22d3ee',
        textAlign: 'center',
        padding: '1.2rem 0',
        borderBottom: '1px solid #22d3ee',
      }}
    >
      <h1 style={{ fontSize: '1.6rem', fontWeight: '700' }}>
        J & J’s Automotive Truck Repair
      </h1>
    </header>
  );
}

export default Header;
