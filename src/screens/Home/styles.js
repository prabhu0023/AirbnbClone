import {StyleSheet, Dimensions} from 'react-native'
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center'
    },
    title:{
        color: 'white',
        fontSize: 80,
        fontWeight:'bold',
        width: '70%',
        marginLeft:25
    },
    button:{
        backgroundColor:'white',
        width:200,
        marginLeft:25,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',  
    },
    searchButton:{
        backgroundColor:'white', 
        height:60,
        borderRadius:30,
        width:Dimensions.get('screen').width -20,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:100,
        marginHorizontal:10,
        top:20,
        flexDirection:'row'
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold',  
    }
});

export default styles;