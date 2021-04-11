import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'
const TopTabBar = createMaterialTopTabNavigator();
const SearchResultNavigator = () => {
    return (
         <TopTabBar.Navigator>
             <TopTabBar.Screen
             name="List"
             component={SearchResultsScreen}
             />
             <TopTabBar.Screen
             name="Map"
             component={SearchResultsScreen}
             />
         </TopTabBar.Navigator>
        // <SearchResultsScreen/>
    )
}

export default SearchResultNavigator
