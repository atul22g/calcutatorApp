import React from 'react'
import { Text, View } from 'react-native'
import Buttonstyle from '../style/Buttonstyle'
import { Button } from 'react-native-paper'

const Buttons = () => {
    return (
        <View style={Buttonstyle.ButtonConytainer}>
            <View style={Buttonstyle.ButtonContainerTop}>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => console.log('(')}>
                    <Text style={Buttonstyle.buttonSize}>(</Text>
                </Button>
                <Button style={Buttonstyle.ButtonTop} mode="contained-tonal" onPress={() => console.log(')')}>
                    <Text style={Buttonstyle.buttonSize}>)</Text>
                </Button>
            </View>
            {/* ButtonBottom */}
            <View style={Buttonstyle.ButtonContainerBottom}>
                {/* ButtonBottomLeft */}
                <View style={Buttonstyle.ButtonContainerBottomLeft}>
                    {/* Numbers */}
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('7')}>
                        <Text style={Buttonstyle.buttonSize}>7</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('8')}>
                        <Text style={Buttonstyle.buttonSize}>8</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('9')}>
                        <Text style={Buttonstyle.buttonSize}>9</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('4')}>
                        <Text style={Buttonstyle.buttonSize}>4</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('5')}>
                        <Text style={Buttonstyle.buttonSize}>5</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('6')}>
                        <Text style={Buttonstyle.buttonSize}>6</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('1')}>
                        <Text style={Buttonstyle.buttonSize}>1</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('2')}>
                        <Text style={Buttonstyle.buttonSize}>2</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('3')}>
                        <Text style={Buttonstyle.buttonSize}>3</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('0')}>
                        <Text style={Buttonstyle.buttonSize}>0</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('.')}>
                        <Text style={Buttonstyle.buttonSize}>.</Text>
                    </Button>
                    <Button style={Buttonstyle.ButtonNubers} mode="contained-tonal" onPress={() => console.log('C')}>
                        <Text style={Buttonstyle.buttonSize}>C</Text>
                    </Button>
                </View>
                {/* ButtonBottomRight */}
                <View style={Buttonstyle.ButtonContainerBottomRight}>
                    <View style={Buttonstyle.ButtonContainerBottomRightTop}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => console.log('-')}>
                            <Text style={Buttonstyle.buttonSize}>-</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => console.log('/')}>
                            <Text style={Buttonstyle.buttonSize}>/</Text>
                        </Button>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightLeft}>
                        <Button style={[Buttonstyle.ButtonOpperator, Buttonstyle.ButtonContainerBottomRightLeftbtn]} mode="contained-tonal" onPress={() => console.log('+')}>
                            <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>+</Text>
                        </Button>
                    </View>
                    <View style={Buttonstyle.ButtonContainerBottomRightRight}>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => console.log('x')}>
                            <Text style={Buttonstyle.buttonSize}>x</Text>
                        </Button>
                        <Button style={Buttonstyle.ButtonOpperator} mode="contained-tonal" onPress={() => console.log('%')}>
                            <Text style={Buttonstyle.buttonSize}>%</Text>
                        </Button>
                    </View>
                    {/* Equalto */}
                    <Button style={Buttonstyle.ButtonEqual} mode="contained-tonal" onPress={() => console.log('=')}>
                        <Text style={[Buttonstyle.buttonSize, { fontSize: 25 }]}>=</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Buttons
