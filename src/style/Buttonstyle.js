import { StyleSheet } from 'react-native'
import { customVH } from '../components/allFunc'
export default Buttonstyle = StyleSheet.create({
    // buttonSize
    buttonSize: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    ButtonConytainer:{
        height: customVH(46)
    },
    // ButtonTop
    ButtonContainerTop: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 30
    },
    ButtonTop: {
        flex: 0.43,
    },
    // ButtonBottom
    ButtonContainerBottom: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        paddingHorizontal: 15,
        paddingVertical: 12
    },
    ButtonContainerBottomLeft: {
        flex: 0.7,
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "green",
        gap: 7
    },
    // ButtonContainerBottomRight
    ButtonContainerBottomRight: {
        flex: 0.45,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5
    },
    // ButtonContainerBottomRightTop
    ButtonContainerBottomRightTop: {
        flexDirection: "row",
        gap: 10
    },
    // ButtonContainerBottomRightLeft
    ButtonContainerBottomRightLeft: {
        height: 90,
        // backgroundColor: "red"
    },
    ButtonContainerBottomRightLeftbtn: {
        height: 90,
        width: 65,
        borderRadius: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    // ButtonContainerBottomRightRight
    ButtonContainerBottomRightRight: {
        gap: 10
    },
    ButtonEqual: {
        paddingTop: 3,
        marginTop: 2,
        height: 38,
        width: 135
    }
})