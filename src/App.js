import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const App = ({ children }) => {
  return (
    <div
      style={{
        background: '#999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        flexDirection: 'column',
        padding: 30,
      }}
    >
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          height: 100,
        }}
      >
        <div style={{ padding: 20 }}>
          <p>N18DCCN011 - Dương Quốc Bảo</p>
          <p>N18DCCN212 - Trần Minh Thắng</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p>KỸ THUẬT ĐỒ HOẠ</p>
        </div>
        <div></div>
      </div>

      {children}
    </div>
  );
};

export default App;
