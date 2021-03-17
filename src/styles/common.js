import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTextView: {
        flex: 1,
        alignItems: 'center',
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 12,
    }
});

export { commonStyles };

