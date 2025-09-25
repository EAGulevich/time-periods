import React, { useState } from 'react';
import { TimePeriods } from './components/TimePeriods/TimePeriods';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid red',
          minWidth: '1440px',
          maxWidth: '1440px',
          height: '1080px',
          maxHeight: '1080px',
          margin: '20px auto',
        }}
      >
        <TimePeriods />
      </div>
    </ThemeProvider>
  );
};

export default App;
