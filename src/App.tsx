import React from 'react';
import { TimePeriods } from './TimePeriods/TimePeriods';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { StyledApp } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <TimePeriods />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
