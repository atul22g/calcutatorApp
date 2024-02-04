import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from '../Calculator/style/style';
import { useTheme } from '../themes/context/Theme';

export default function TopBar() {
    const { toggleTheme, themeicon, theme } = useTheme();
    return (
        <View style={styles.topBar}>
            <TouchableOpacity onPress={toggleTheme} style={[styles.themeiconwrapper, { backgroundColor: theme.themeiconwrapper }]}>
                <FontAwesome6 style={styles.themeicon} size={25} name={themeicon} solid />
            </TouchableOpacity>
        </View>
    )
}
