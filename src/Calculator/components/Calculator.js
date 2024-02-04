import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import styles from '../style/style';
import Buttons from './Buttons';
import { useCalculatorState } from '../context/calculator';
import { useTheme } from '../../themes/context/Theme';
import TopBar from '../../Comman/TopBar';

export default Calculator = () => {
    const { calculatorState, result } = useCalculatorState();
    const { isDarkMode, theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <StatusBar barStyle={!isDarkMode ? "dark-content" : "light-content"} backgroundColor={theme.backgroundColor} />
            <View>
                <TopBar />
                {/* Screen */}
                <View style={styles.screen}>
                    <Text style={[styles.screenText, { color: theme.screenText }]}>{calculatorState}</Text>
                    <Text style={[styles.result, { color: theme.result }]}>{result}</Text>
                </View>
                {/* Buttons */}
                <Buttons />
            </View>
        </View>
    )
}