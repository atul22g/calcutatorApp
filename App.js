import React from 'react'
import Main from './src/Main'
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './src/Calculator/context/calculator';
import { ThemeProvider } from './src/themes/context/Theme';

export default App = () => {
    return (
        <ThemeProvider>
            <StateProvider>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </StateProvider>
        </ThemeProvider>
    )
}
