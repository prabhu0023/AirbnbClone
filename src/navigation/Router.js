import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator'
import HomeScreen from '../screens/Home'
import SearchResultsScreen from '../screens/SearchResults'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestScreen from '../screens/Guest';


const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>

                <Stack.Screen name={"Home"}
                        component={HomeTabNavigator}
                        options={{
                             headerShown:false
                        }}
                    />
                    <Stack.Screen name={"Destination Search"}
                        component={DestinationSearchScreen}
                        options={{
                            title: "Search your destination"
                        }}
                    />
                    <Stack.Screen name={"Guest"}
                        component={GuestScreen}
                        options={{
                            title: "How many pepole"
                        }}
                    />
                     {/* <Stack.Screen name={"Search Result"}
                        component={SearchResultsScreen}
                        options={{
                            title: "Search Result"
                        }}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
            {/* <View>
          <DestinationSearchScreen/>
      </View>  */}
        </>
    )
}

export default Router
