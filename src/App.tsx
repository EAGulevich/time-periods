import React from 'react';
import './styles.css';
import {TimePeriods} from "./components/TimePeriods/TimePeriods";

const App: React.FC = () => {
    return <div style={{
        padding: '20px'
    }}>
        <TimePeriods />

    </div>;
};

export default App;
