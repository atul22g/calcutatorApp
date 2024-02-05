import React, { useState } from 'react'
import { View } from 'react-native'
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
    const [interest, setInterest] = useState({
        PA: '10000',
        IR: '10',
        PT: 'Days',
        TP: '1',
        IE: '2.73',
        Total: '10,002.73',
    });

    const handleInput = (name, value) => {
        const principalAmount = name === 'PA' ? value : interest.PA;
        const interestRate = name === 'IR' ? (value / 100) : (interest.IR / 100);
        const PeriodTime = name === 'PT' ? value : interest.PT;
        const timePeriod = name === 'TP' ? value : interest.TP;

        let interestEarned = 0;

        switch (PeriodTime) {
            case 'Days':
                interestEarned = (principalAmount * interestRate * timePeriod) / 365;
                break;
            case 'Weeks':
                interestEarned = (principalAmount * interestRate * timePeriod) / 52;
                break;
            case 'Months':
                interestEarned = (principalAmount * interestRate * timePeriod) / 12;
                break;
            case 'Quarters':
                interestEarned = (principalAmount * interestRate * timePeriod) / 4;
                break;
            case 'Years':
                interestEarned = principalAmount * interestRate * timePeriod;
                break;
            default:
                break;
        }

        let floatInterestEarned = parseFloat(interestEarned).toFixed(2);
        const totalVal = parseFloat(principalAmount) + parseFloat(floatInterestEarned);
        let total = isNaN(totalVal) ? 0 : totalVal

        setInterest({
            ...interest,
            [name]: value,
            IE: floatInterestEarned,
            Total: total,
        });
    };

    return (
        <PaperProvider
            theme={{
                colors: {
                    primary: theme.btnText,
                },
            }}
        >
            <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
                <TopBar />
                {/* Principal Amount */}
                <TextInput mode='outlined' value={interest.PA} onChangeText={(value) => handleInput('PA', value)} keyboardType="numeric" style={[{ backgroundColor: theme.backgroundColor }, style.TextInput]} outlineColor={theme.btnText} textColor={theme.btnText} label="Principal Amount  ₹" />
                {/* Interest Rate */}
                <TextInput mode='outlined' value={interest.IR} onChangeText={(value) => handleInput('IR', value)} keyboardType="numeric" style={[{ backgroundColor: theme.backgroundColor }, style.TextInput]} outlineColor={theme.btnText} textColor={theme.btnText} label="Interest Rate (%)" />
                {/* Period Type Dropdown */}
                <Dropdown
                    style={[style.dropdown, { borderColor: theme.btnText }]}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={[style.selectedTextStyle, { color: theme.btnText }]}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Period Type"
                    value={interest.PT}
                    onChange={(value) => handleInput('PT', value.value)}
                />
                {/* Time Period */}
                <TextInput mode='outlined' value={interest.TP} onChangeText={(value) => handleInput('TP', value)} keyboardType="numeric" style={{ backgroundColor: theme.backgroundColor }} outlineColor={theme.btnText} label="Time Period" textColor={theme.btnText} />
                {/* Result */}
                <Text style={[style.resultTitle, { color: theme.btnText }]} variant="titleLarge">Results:</Text>
                {/* Principal Amount */}
                <View style={style.resulcontainer}>
                    <Text style={[style.resultHeading, { color: theme.btnText }]} variant="titleMedium">Principal Amount ₹ </Text>
                    <Text style={[style.resultbody, { color: theme.btnText }]} variant="bodyMedium">{interest.PA}</Text>
                </View>
                {/* Interest Rate */}
                <View style={style.resulcontainer}>
                    <Text style={[style.resultHeading, { color: theme.btnText }]} variant="titleMedium">Interest Earned ₹ </Text>
                    <Text style={[style.resultbody, { color: theme.btnText }]} variant="bodyMedium">{interest.IE}</Text>
                </View>
                {/* Total Value */}
                <View style={style.resulcontainer}>
                    <Text style={[style.resultHeading, { color: theme.btnText }]} variant="titleMedium">Total Value ₹ </Text>
                    <Text style={[style.resultbody, { color: theme.btnText }]} variant="bodyMedium">{interest.Total}</Text>
                </View>
            </View>
        </PaperProvider>
    )
}