import { StyleSheet } from 'react-native'
import { customVH, customVW } from '../components/allFunc'
export default styles = StyleSheet.create({
    // container
    container: {
        flex: 1,
        backgroundColor: "#304c71",
        paddingBottom: 10
    },
    // topBar
    topBar: {
        alignItems: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 8,
        height: customVH(7),
        width: customVW(100),
        // backgroundColor: "red"
    },
    themeiconwrapper: {
        backgroundColor: "#1c2e46",
        borderRadius: 20,
        width: 40,
        height: 40
        
    },
    themeicon:{
        marginTop: 4,
        marginLeft: 8,
        color: "#fff",
    },
    // Screen
    screen: {
        height: customVH(50),
        justifyContent: "center",
        alignItems: "flex-end",
        // backgroundColor: "green",
    },
    screenText:{
        margin: 15,
        fontSize: 35,
        fontWeight: "500",
        color: "#fff",
        flexWrap: "nowrap",
    },
    result:{
        margin: 15,
        fontSize: 32,
        fontWeight: "600",
        color: "#858585",
        flexWrap: "nowrap",
    }


})