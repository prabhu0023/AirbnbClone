import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        margin:20,
        paddingVertical:10,
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    hit:{
        color:'grey'
    },
    rowRight:{
        flexDirection:'row', 
        width:100, 
        alignItems:'center'
    },
    minues:{
        fontWeight:'bold',
        fontSize:70,
        borderRadius:100,
        borderColor:'lightgrey',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        marginHorizontal:10
    },
    plus:{
        fontWeight:'bold',
        fontSize:70,
        borderRadius:100,
        borderColor:'lightgrey',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        marginHorizontal:10
    },
    count:{
        fontSize:18,
    }
})

export default styles;