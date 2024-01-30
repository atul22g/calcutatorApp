import React from 'react'
import { StatusBar, View } from 'react-native'
import Main from './src/components/Main'
import style from './src/style/style'
import { StateProvider } from './src/state/StateContext';

export default App = () => {
    return (
        <View style={style.container}>
            <StateProvider>
                <StatusBar barStyle="light-content" backgroundColor="#304c71" />
                <Main />
            </StateProvider>
        </View>
    )
}
