import React, { useState } from 'react';
import { TimePeriods } from './components/TimePeriods/TimePeriods';
import Counter from './components/Counter/Counter';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App: React.FC = () => {
  const [count, setCount] = useState(1998);
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
      {/*<Counter value={count} />*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setCount(count + 17);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  inc*/}
      {/*</button>*/}
    </ThemeProvider>
  );
};

export default App;
