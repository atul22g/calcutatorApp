import React from 'react'
import { StatusBar, View } from 'react-native'
import Main from './src/components/Main'
import style from './src/style/style'

export default App = () => {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#304c71"/>
            <Main />
        </View>
    )
}
