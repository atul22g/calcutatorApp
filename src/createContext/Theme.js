// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../style/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [themeicon, setThemeicon] = useState('moon');

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            setThemeicon('sun')
        }else{
            setThemeicon('moon')
        }
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeicon, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
