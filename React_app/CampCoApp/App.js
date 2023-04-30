import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, } from 'react-native';
import Munchies from './Munchies';
import HomePage from './HomeScreen';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import createNativeStackNavigator from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

<<<<<<< HEAD
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name = "Order Delivery" component = {HomePage} />
        <Stack.Screen name = "Order Pickup" component = {Munchies}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 600,
    marginTop: 125,
  },
  button: {
    fontSize: 300,
    marginBottom: 400,

  },

});

