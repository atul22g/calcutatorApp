import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
import style from '../style/style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Buttons from './Buttons';

export default Main = () => {
    return (
        <View >
            <View style={style.topBar}>
                <TouchableOpacity style={style.themeiconwrapper}>
                    <FontAwesome6 style={style.themeicon} size={30} name={'moon'} solid />
                </TouchableOpacity>
            </View>
            {/* Screen */}
            <View style={style.screen}>
                <Text style={style.screenText}>1+2</Text>
            </View>
            {/* Buttons */}
            <Buttons />
        </View>
    )
}