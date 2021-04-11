import React, { useState } from 'react'
import { View, TextInput, FlatList, Text, Pressable } from 'react-native'
import styles from './styles'

import {useNavigation} from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import searchResults from '../../../assets/data/search'
const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState('');
    const navigation =useNavigation();
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder="where are you?"
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable style={styles.row} onPress={() => {navigation.navigate("Guest")}}>
                        <View style={styles.iconContain}>
                        <Entypo name='location-pin' size={25}   />
                        </View>
                        <Text style={styles.locationTitle}> {item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen
