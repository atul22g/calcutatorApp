import { View } from 'react-native'
import React from 'react'
import style from '../styles/Style';
import { useTheme } from '../../themes/context/Theme';
import { Dropdown } from 'react-native-element-dropdown';
import { Text, TextInput, Provider as PaperProvider } from 'react-native-paper';
import TopBar from '../../Comman/TopBar';

const data = [
    { label: 'Days', value: 'Days' },
    { label: 'Weeks', value: 'Weeks' },
    { label: 'Months', value: 'Months' },
    { label: 'Quarters', value: 'Quarters' },
    { label: 'Years', value: 'Years' },
];

export default function Interest() {
    const { theme } = useTheme();
    return (
        <PaperProvider
            theme={{
                color: "red",
                colors: {
                    primary: theme.btnText,
                    surfaceVariant: theme.btnText,
                },
            }}
        >
            <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
                <TopBar />
                {/* Principal Amount */}
                <TextInput mode='outlined' keyboardType="numeric" style={[{ backgroundColor: theme.backgroundColor }, style.TextInput]} outlineColor={theme.btnText} textColor={theme.btnText} label="Principal Amount" />
                {/* Interest Rate */}
                <TextInput mode='outlined' keyboardType="numeric" style={[{ backgroundColor: theme.backgroundColor }, style.TextInput]} outlineColor={theme.btnText} textColor={theme.btnText} label="Interest Rate (%)" />
                {/* Period Type Dropdown */}
                <Dropdown
                    style={[style.dropdown, { borderColor: theme.btnText }]}
                    placeholderStyle={style.placeholderStyle}
                    // placeholderStyle={[style.placeholderStyle, { color: theme.btnText }]}
                    selectedTextStyle={style.selectedTextStyle}
                    iconStyle={style.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Period Type"
                // value={value}
                // onFocus={() => setIsFocus(true)}
                // onBlur={() => setIsFocus(false)}
                // onChange={item => {
                //     setValue(item.value);
                //     setIsFocus(false);
                // }}
                // renderLeftIcon={() => (
                //     <AntDesign
                //         style={styles.icon}
                //         color={isFocus ? 'blue' : 'black'}
                //         name="Safety"
                //         size={20}
                //     />
                // )}
                />
                {/* Time Period */}
                <TextInput mode='outlined' keyboardType="numeric" style={{ backgroundColor: theme.backgroundColor }} outlineColor={theme.btnText} label="Time Period" textColor={theme.btnText} />
                {/* Result */}
                <Text style={[style.resultTitle, { color: theme.btnText }]} variant="titleLarge">Results:</Text>
                
            </View>
        </PaperProvider>
    )
}