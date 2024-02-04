import React, { useState } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Buttonstyle from '../style/Buttonstyle'
import { Button } from 'react-native-paper'
import { useCalculatorState } from '../context/calculator';
import { useTheme } from '../../themes/context/Theme';

const Buttons = () => {
    const { calculatorState, setCalculatorState, setResult, result } = useCalculatorState();
    const { theme } = useTheme();
    const [addOperator, setAddOperator] = useState('false');
    const [isEqual, setIsEqual] = useState('false');

    const operator = (sum) => {
        if (isEqual == 'true') {
            setCalculatorState(sum)
            setResult('')
            setIsEqual('false')
            // console.log("isEqual");
        } else {
            lastLetter = calculatorState.charAt(calculatorState.length - 1);
            setCalculatorState(calculatorState + sum)
            // console.log("else isEqual");
        }

        // Clear screen
        if (sum == 'AC') {
            setAddOperator('false')
            setResult("")
            setCalculatorState("")
            // console.log("C");
        }
        // Back
        if (sum == '←') {
            let _back = calculatorState.slice(0, -1);
            setCalculatorState(_back)
        }
        // Change operator
        else if (['+', '-', '*', '/', '%', '.'].includes(lastLetter) && ['+', '-', '*', '/', '%', '.'].includes(sum)) {
            let _calculatorState = calculatorState.slice(0, -1);
            // console.log(_calculatorState);
            setCalculatorState(_calculatorState + sum)
            // console.log("operator");
        }
        // add  Result
        else if (['+', '-', '*', '/', '%'].includes(sum)) {
            setAddOperator('true')
            setResult(eval(calculatorState))
            // console.log("Result");
        }
        // add number after operator
        else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'].includes(sum) && addOperator == 'true') {
            let _result = calculatorState + sum
            setResult(eval(_result))
            // console.log("number");
        }
        // add number 
        else if (sum == "=") {
            setCalculatorState(result.toString())
            setResult("")
            setAddOperator('false')
            setIsEqual('true')
            // console.log("else C");
        }
    }

    return (
        <View style={Buttonstyle.ButtonConytainer}>
            <View style={Buttonstyle.ButtonContainerTop}>
                <Button style={[Buttonstyle.ButtonTop, { backgroundColor: theme.ButtonTop }]} mode="contained-tonal" onPress={() => operator('AC')}>
                    <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>AC</Text>
                </Button>
                <Button style={[Buttonstyle.ButtonTop, { backgroundColor: theme.ButtonTop }]} mode="contained-tonal" onPress={() => operator('←')}>
                    <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>←</Text>
                </Button>
            </View>
            {/* ButtonBottom */}
            <View style={Buttonstyle.ButtonContainerBottom}>
                {/* ButtonBottomLeft */}
                <View style={Buttonstyle.ButtonContainerBottomLeft}>
                    {/* Numbers */}
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('7')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>7</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('8')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>8</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('9')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>9</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('4')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>4</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('5')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>5</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('6')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>6</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('1')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>1</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('2')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>2</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('3')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>3</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('0')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>0</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => operator('.')}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>.</Text>
                    </Button>
                    <Button style={{ backgroundColor: theme.ButtonNubers }} mode="contained-tonal" onPress={() => { operator('00') }}>
                        <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>00</Text>
                    </Button>
                </View>
                {/* ButtonBottomRight */}
                <View style={Buttonstyle.ButtonContainerBottomRight}>
                    <View style={Buttonstyle.ButtonContainerBottomRightTop}>
                        <Button style={{ backgroundColor: theme.ButtonOperator }} mode="contained-tonal" onPress={() => operator('-')}>
                            <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>-</Text>
                        </Button>
                        <Button style={{ backgroundColor: theme.ButtonOperator }} mode="contained-tonal" onPress={() => operator('/')}>
                            <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>/</Text>
                        </Button>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightLeft}>
                        <TouchableHighlight underlayColor="#27b5ff" style={[{ backgroundColor: theme.ButtonOperator }, Buttonstyle.ButtonContainerBottomRightLeftbtn]} mode="contained-tonal" onPress={() => operator('+')}>
                            <Text style={[Buttonstyle.buttonSize, { fontSize: 25, color: theme.btnText }]}>+</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightRight}>
                        <Button style={{ backgroundColor: theme.ButtonOperator }} mode="contained-tonal" onPress={() => operator('*')}>
                            <Text  style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>*</Text>
                        </Button>
                        <Button style={{ backgroundColor: theme.ButtonOperator }} mode="contained-tonal" onPress={() => operator('%')}>
                            <Text style={[Buttonstyle.buttonSize,{color: theme.btnText}]}>%</Text>
                        </Button>
                    </View>
                    {/* Equalto */}
                    <Button style={[Buttonstyle.ButtonEqual, {backgroundColor: theme.ButtonEqual}]} mode="contained-tonal" onPress={() => operator('=')}>
                        <Text style={[Buttonstyle.buttonSize, { fontSize: 25, color: theme.btnText }]}>=</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Buttons
