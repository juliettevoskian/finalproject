import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, NavigationContainer } from 'react-native';
import Munchies from './Munchies';
import HomePage from './HomeScreen';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
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

