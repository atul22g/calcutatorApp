import { StyleSheet } from 'react-native'
import { customVH } from '../components/allFunc'
export default Buttonstyle = StyleSheet.create({
    // buttonSize
    buttonSize: {
        fontSize: 18,
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
        backgroundColor: "#1c2e46",
    },
    // ButtonBottom
    ButtonContainerBottom: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "red",
        paddingHorizontal: 18,
        paddingVertical: 14
    },
    ButtonContainerBottomLeft: {
        flex: 0.7,
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "green",
        gap: 10
    },
    ButtonNubers: {
        backgroundColor: "#152036"
    },
    // ButtonContainerBottomRight
    ButtonContainerBottomRight: {
        flex: 0.45,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10
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
    ButtonOpperator: {
        backgroundColor: "#27b5ff",
    },
    ButtonEqual: {
        backgroundColor: "#fea31d",
        paddingTop: 3,
        marginTop: 2,
        height: 38,
        width: 135
    }
})