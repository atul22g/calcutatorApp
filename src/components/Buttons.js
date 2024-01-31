import React, { useState } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Buttonstyle from '../style/Buttonstyle'
import { Button } from 'react-native-paper'
import { useCalculatorState } from '../state/StateContext';

const Buttons = () => {
    const { calculatorState, setCalculatorState, setResult, result } = useCalculatorState();
    const [addOpperator, setAddOpperator] = useState('false');
    const [isEqual, setIsEqual] = useState('false');

    const operator = (sum) => {
        if (isEqual == 'true') {
            setCalculatorState(sum)
            setResult('')
            setIsEqual('false')
            console.log("isEqual");
        } else {
            lastLetter = calculatorState.charAt(calculatorState.length - 1);
            setCalculatorState(calculatorState + sum)
            console.log("else isEqual");
        }

        // Clear screen
        if (sum == 'AC') {
            setAddOpperator('false')
            setResult("")
            setCalculatorState("")
            console.log("C");
        }
        // Back
        if (sum == '←') {
            let _back = calculatorState.slice(0, -1);
            setCalculatorState(_back)
        }
        // Change opperator
        else if (['+', '-', '*', '/', '%','.'].includes(lastLetter) && ['+', '-', '*', '/', '%','.'].includes(sum)) {
            let _calculatorState = calculatorState.slice(0, -1);
            console.log(_calculatorState);
            setCalculatorState(_calculatorState + sum)
            console.log("opperator");
        }
        // add  Result
        else if (['+', '-', '*', '/', '%'].includes(sum)) {
            setAddOpperator('true')
            setResult(eval(calculatorState))
            console.log("Result");
        }
        // add number after opperator
        else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(sum) && addOpperator == 'true') {
            let _result = calculatorState + sum
            setResult(eval(_result))
            console.log("number");
        }
        // add number 
        else if (sum == "=") {
            setCalculatorState(result.toString())
            setResult("")
            setAddOpperator('false')
            setIsEqual('true')
            console.log("else C");
        }
        else {

        }
    }

    return (
        <View style={Buttonstyle.ButtonConytainer}>
            <View style={Buttonstyle.ButtonContainerTop}>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => operator('AC')}>
                    <Text style={Buttonstyle.buttonSize}>AC</Text>
                </Button>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => operator('←')}>
                    <Text style={Buttonstyle.buttonSize}>←</Text>
                </Button>
            </View>
            {/* ButtonBottom */}
            <View style={Buttonstyle.ButtonContainerBottom}>
                {/* ButtonBottomLeft */}
                <View style={Buttonstyle.ButtonContainerBottomLeft}>
                    {/* Numbers */}
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('7')}>
                        <Text style={Buttonstyle.buttonSize}>7</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator(8)}>
                        <Text style={Buttonstyle.buttonSize}>8</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('9')}>
                        <Text style={Buttonstyle.buttonSize}>9</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('4')}>
                        <Text style={Buttonstyle.buttonSize}>4</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('5')}>
                        <Text style={Buttonstyle.buttonSize}>5</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('6')}>
                        <Text style={Buttonstyle.buttonSize}>6</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('1')}>
                        <Text style={Buttonstyle.buttonSize}>1</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('2')}>
                        <Text style={Buttonstyle.buttonSize}>2</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('3')}>
                        <Text style={Buttonstyle.buttonSize}>3</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('0')}>
                        <Text style={Buttonstyle.buttonSize}>0</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => operator('.')}>
                        <Text style={Buttonstyle.buttonSize}>.</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => { operator('00') }}>
                        <Text style={Buttonstyle.buttonSize}>00</Text>
                    </Button>
                </View>
                {/* ButtonBottomRight */}
                <View style={Buttonstyle.ButtonContainerBottomRight}>
                    <View style={Buttonstyle.ButtonContainerBottomRightTop}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => operator('-')}>
                            <Text style={Buttonstyle.buttonSize}>-</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => operator('/')}>
                            <Text style={Buttonstyle.buttonSize}>/</Text>
                        </Button>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightLeft}>
                        <TouchableHighlight underlayColor="#27b5ff" style={[Buttonstyle.ButtonOpperator, Buttonstyle.ButtonContainerBottomRightLeftbtn]} mode="contained-tonal" onPress={() => operator('+')}>
                            <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>+</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightRight}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => operator('*')}>
                            <Text style={Buttonstyle.buttonSize}>*</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => operator('%')}>
                            <Text style={Buttonstyle.buttonSize}>%</Text>
                        </Button>
                    </View>
                    {/* Equalto */}
                    <Button style={Buttonstyle.ButtonEqual} mode="contained-tonal" onPress={() => operator('=')}>
                        <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>=</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Buttons
