import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground } from 'react-native'; 


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Welcome to Campus Corner!</Text> 
           <Image
      source={{
        uri: 'https://villanovan.com/wp-content/uploads/2017/04/a160f756c0b3cdaf2d9090c764de345d.jpg'
        }}
      style= {{width: 400, height: 400, marginBottom: 10, marginTop: 20}}
    />
      <Text style = {{fontSize: 20, marginRight: 5, marginLeft: 5, marginBottom: 25, marginTop: 10,}}>
          Click below to begin your order!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { 
          navigation.navigate('Menu')
        }}
      >
        <Text style={styles.buttonText}>Place Your Order</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    marginLeft:10,
    marginRight:10,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});