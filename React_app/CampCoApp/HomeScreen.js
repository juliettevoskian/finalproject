import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; 


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.app.goo.gl/n3GEP5K6YpNmdQmq5' }}
        style={styles.logo}
      />
       <Text style={styles.title}>Welcome to Campus Corner!</Text> 
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Munchies', { type: 'delivery' })}
      >
        <Text style={styles.buttonText}>Order Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Munchies', { type: 'pickup' })}
      >
        <Text style={styles.buttonText}>Order Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
