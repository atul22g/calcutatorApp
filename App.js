import React from 'react'
import Main from './src/components/Main'
import { StateProvider } from './src/createContext/calculator';
import { ThemeProvider } from './src/createContext/Theme';

export default App = () => {
    return (
        <ThemeProvider>
            <StateProvider>
                <Main/>
            </StateProvider>
        </ThemeProvider>
    )
}
