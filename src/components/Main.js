import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
import style from '../style/style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Buttons from './Buttons';
import { useCalculatorState } from '../state/StateContext';

export default Main = () => {
    const { calculatorState, result } = useCalculatorState();
    return (
        <View >
            <View style={style.topBar}>
                <TouchableOpacity style={style.themeiconwrapper}>
                    <FontAwesome6 style={style.themeicon} size={30} name={'moon'} solid />
                </TouchableOpacity>
            </View>
            {/* Screen */}
            <View style={style.screen}>
                <Text style={style.screenText}>{calculatorState}</Text>
                <Text style={style.result}>{result}</Text>
            </View>
            {/* Buttons */}
            <Buttons />
        </View>
    )
}