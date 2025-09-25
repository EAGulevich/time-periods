import React, { useState } from 'react';
import { TimePeriods } from './components/TimePeriods/TimePeriods';
import AnimatedNumber from './components/Counter/AnimatedNumber';
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
        }}
      >
        <TimePeriods />
      </div>
    </ThemeProvider>
  );
};

export default App;
