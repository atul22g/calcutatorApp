import React from 'react'
import { StatusBar, TouchableOpacity, View, Text } from 'react-native'
import styles from '../style/style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Buttons from './Buttons';
import { useCalculatorState } from '../createContext/calculator';
import { useTheme } from '../createContext/Theme';

export default Main = () => {
    const { calculatorState, result } = useCalculatorState();
    const { toggleTheme, themeicon,isDarkMode, theme } = useTheme();
    return (
        <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
            <StatusBar barStyle={!isDarkMode? "dark-content": "light-content"} backgroundColor={theme.backgroundColor}/>
            <View>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={toggleTheme} style={[styles.themeiconwrapper,{backgroundColor : theme.themeiconwrapper}]}>
                        <FontAwesome6 style={styles.themeicon} size={25} name={themeicon} solid />
                    </TouchableOpacity>
                </View>
                {/* Screen */}
                <View style={styles.screen}>
                    <Text style={[styles.screenText,{color:theme.screenText}]}>{calculatorState}</Text>
                    <Text style={[styles.result,{color:theme.result}]}>{result}</Text>
                </View>
                {/* Buttons */}
                <Buttons />
            </View>
        </View>
    )
}