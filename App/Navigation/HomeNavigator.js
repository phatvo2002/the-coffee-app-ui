import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GetStart from '../Screens/GetStart';
import Home from '../Screens/Home';
import ProductDetail from '../Screens/ProductDetail';
const Stack = createStackNavigator()
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name='get-started' component={GetStart}></Stack.Screen>
         <Stack.Screen name='home' component={Home}></Stack.Screen>
         <Stack.Screen name='product-detail' component={ProductDetail}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigator