import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import {useNavigation} from '@react-navigation/native'
import styles from './styles'

const GuestScreen = () => {
    const [adultCount, setadultCount] = useState(0)
    const [childrenCount, setchildrenCount] = useState(0)
    const [infantsCount, setinfantsCount] = useState(0)

    const navigation =useNavigation();
    return (
        <View style={{justifyContent:'space-between',height:"100%"}}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>Adults</Text>
                        <Text style={styles.hit}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.rowRight}>
                        <Pressable style={styles.minues} onPress={() => { setadultCount(Math.max(0, adultCount - 1)) }}>
                            <Text>-</Text>
                        </Pressable>

                        <Text style={styles.count}>{adultCount}</Text>
                        <Pressable style={styles.plus} onPress={() => { setadultCount(adultCount + 1) }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>Children</Text>
                        <Text style={styles.hit}>Ages 2-12</Text>
                    </View>
                    <View style={styles.rowRight}>
                        <Pressable style={styles.minues} onPress={() => { setchildrenCount(Math.max(0, childrenCount - 1)) }}>
                            <Text>-</Text>
                        </Pressable>

                        <Text style={styles.count}>{childrenCount}</Text>
                        <Pressable style={styles.plus} onPress={() => { setchildrenCount(childrenCount + 1) }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>Infants</Text>
                        <Text style={styles.hit}>under 2</Text>
                    </View>
                    <View style={styles.rowRight}>
                        <Pressable style={styles.minues} onPress={() => {
                            setinfantsCount(Math.max(0, infantsCount - 1))
                        }}>
                            <Text>-</Text>
                        </Pressable>

                        <Text style={styles.count}>{infantsCount}</Text>
                        <Pressable style={styles.plus} onPress={() => { setinfantsCount(infantsCount + 1) }}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{marginBottom:30,marginHorizontal:20}}>
            <Pressable style={{backgroundColor:'#f15454',width:"100%",borderRadius:10, alignItems:'center',
            justifyContent:'center',
        height:50,
        }} onPress={() => { navigation.navigate("Search Result") }}>
                            <Text style={{fontSize:24,fontWeight:'bold',color:'#fff'}}>Search</Text>
                        </Pressable>
            </View>
        </View>
    )
}

export default GuestScreen
