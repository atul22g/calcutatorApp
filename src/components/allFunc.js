import { Dimensions } from 'react-native';

// Custom View Height
const screenHeight = Dimensions.get('window').height;
const customVH = (percentage) => (screenHeight * percentage) / 100;

// Custom View Wieght
const screenWidth = Dimensions.get('window').width;
const customVW = (percentage) => (screenWidth * percentage) / 100;


export {customVH, customVW}
