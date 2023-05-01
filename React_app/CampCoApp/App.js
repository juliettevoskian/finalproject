import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, } from 'react-native';
import Munchies from './Munchies';
import HomePage from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CartPage from './Cart';




const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name = "Home" component ={HomePage}/>
      <Stack.Screen name="Menu" component={Munchies}/>
      <Stack.Screen name = "Cart" component={CartPage}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
