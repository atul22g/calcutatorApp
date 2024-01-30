import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [calculatorState, setCalculatorState] = useState('');
    const [result, setResult] = useState('');

    return (
        <StateContext.Provider value={{ calculatorState, setCalculatorState, result, setResult }}>
            {children}
        </StateContext.Provider>
    );
};

export const useCalculatorState = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useCalculatorState must be used within a StateProvider');
    }
    return context;
};
