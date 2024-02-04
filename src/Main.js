// import { View, Text } from 'react-native'
import React from 'react'
import Calculator from './Calculator/components/Calculator'
import { useTheme } from './themes/context/Theme';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Interest from './Interest/Components/Interest';
const Tab = createBottomTabNavigator();

const tabOptions = (theme, name) => {
    return {
        headerShown: false,
        tabBarActiveTintColor: theme.btnText,
        tabBarActiveBackgroundColor: theme.themeiconwrapper,
        tabBarInactiveBackgroundColor: theme.ButtonTop,
        tabBarHideOnKeyboard: 'true',
        tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            paddingBottom: 2,
            borderTopWidth: 0,
        },
        tabBarStyle: {
            borderTopWidth: 0,
        },
        tabBarIcon: () => {
            return <FontAwesome6 name={name} size={18} color={theme.btnText} />
        }
    }
}

export default function Main() {
    const { theme } = useTheme();
    return (
        <Tab.Navigator>
            <Tab.Screen options={tabOptions(theme, 'calculator')} name="Calculator" component={Calculator} />
            <Tab.Screen options={tabOptions(theme, 'percent')} name="Interest Rate" component={Interest} />
        </Tab.Navigator>
    )
}