// src/utils/getIconType.js

const getIconType = (type) => {
    switch (type) {
        case 'material':
            return require('react-native-vector-icons/MaterialIcons').default;
        case 'font-awesome':
            return require('react-native-vector-icons/FontAwesome').default;
        case 'font-awesome-5':
            return require('react-native-vector-icons/FontAwesome5').default;
        case 'simple-line-icon':
            return require('react-native-vector-icons/SimpleLineIcons').default;
        default:
            return require('react-native-vector-icons/MaterialIcons').default;
    }
};

export default getIconType;

