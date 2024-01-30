import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Buttonstyle from '../style/Buttonstyle'
import { Button } from 'react-native-paper'
import { useCalculatorState } from '../state/StateContext';
// import {eval} from 'react-native-eval';


const Buttons = () => {
    const { calculatorState, setCalculatorState, setResult } = useCalculatorState();

    const fucResult = () => {
        const seeresult = eval(calculatorState);
        setResult(seeresult.toString());
    }


    return (
        <View style={Buttonstyle.ButtonConytainer}>
            <View style={Buttonstyle.ButtonContainerTop}>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "(")}>
                    <Text style={Buttonstyle.buttonSize}>(</Text>
                </Button>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + ")")}>
                    <Text style={Buttonstyle.buttonSize}>)</Text>
                </Button>
            </View>
            {/* ButtonBottom */}
            <View style={Buttonstyle.ButtonContainerBottom}>
                {/* ButtonBottomLeft */}
                <View style={Buttonstyle.ButtonContainerBottomLeft}>
                    {/* Numbers */}
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "7")}>
                        <Text style={Buttonstyle.buttonSize}>7</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "8")}>
                        <Text style={Buttonstyle.buttonSize}>8</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "9")}>
                        <Text style={Buttonstyle.buttonSize}>9</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "4")}>
                        <Text style={Buttonstyle.buttonSize}>4</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "5")}>
                        <Text style={Buttonstyle.buttonSize}>5</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "6")}>
                        <Text style={Buttonstyle.buttonSize}>6</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "1")}>
                        <Text style={Buttonstyle.buttonSize}>1</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "2")}>
                        <Text style={Buttonstyle.buttonSize}>2</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "3")}>
                        <Text style={Buttonstyle.buttonSize}>3</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "0")}>
                        <Text style={Buttonstyle.buttonSize}>0</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + ".")}>
                        <Text style={Buttonstyle.buttonSize}>.</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => {setCalculatorState(''), setResult('') }}>
                        <Text style={Buttonstyle.buttonSize}>C</Text>
                    </Button>
                </View>
                {/* ButtonBottomRight */}
                <View style={Buttonstyle.ButtonContainerBottomRight}>
                    <View style={Buttonstyle.ButtonContainerBottomRightTop}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "-")}>
                            <Text style={Buttonstyle.buttonSize}>-</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "/")}>
                            <Text style={Buttonstyle.buttonSize}>/</Text>
                        </Button>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightLeft}>
                        <TouchableHighlight underlayColor="#27b5ff" style={[Buttonstyle.ButtonOpperator, Buttonstyle.ButtonContainerBottomRightLeftbtn]} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "+")}>
                            <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>+</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightRight}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "*")}>
                            <Text style={Buttonstyle.buttonSize}>*</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => setCalculatorState(calculatorState + "%")}>
                            <Text style={Buttonstyle.buttonSize}>%</Text>
                        </Button>
                    </View>
                    {/* Equalto */}
                    <Button style={Buttonstyle.ButtonEqual} mode="contained-tonal" onPress={() => fucResult()}>
                        <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>=</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Buttons
