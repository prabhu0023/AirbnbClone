import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home'
import SearchResultNavigator from './SearchResultNavigator'

const Stack = createStackNavigator();
const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={"Search Result"}
                component={SearchResultNavigator}
                options={{
                    title: "Search Result"
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator
