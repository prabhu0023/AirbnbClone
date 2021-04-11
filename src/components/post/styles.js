import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        backgroundColor: 'black',
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        lineHeight: 28,
        fontSize: 18
    },
    prices: {
        marginVertical: 10,
        fontSize: 18
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        marginLeft: 20
    },
    total: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
        fontSize: 16
    }
});

export default styles;