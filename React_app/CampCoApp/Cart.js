import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet,TouchableOpacity } from 'react-native';
import {Munchies} from './Munchies';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5001' : 'http://10.0.2.2:5001';

const CartPage = ({inCart}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleDeliveryOrder = () => {
    const payload = {
        name,
        address,
    }
    if (name === '') {
      Alert.alert('Please enter your name');
    } 
    if (address === ''){
      Alert.alert('Please enter your adress for delivery')
    }else {
      const readyTime = new Date(Date.now() + 30 * 60000).toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});
      Alert.alert(`Thank you, ${name}! Your order will be arrive at around ${readyTime}`);
    }

    // Send a request to the server to save the order
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
                setIsError(true);
                setMessage(jsonRes.message);
            } else {
                onLoggedIn(jsonRes.token);
                setIsError(false);
                setMessage(jsonRes.message);
            }
        } catch (err) {
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
  };

  const handlePickUpOrder = () => {
    const payload = {
        name,
        address,
    }
    if (name === '') {
      Alert.alert('Please enter your name');
    } else {
      const readyTime = new Date(Date.now() + 30 * 60000).toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});
      Alert.alert(`Thank you, ${name}! Your order will be ready for pick up at ${readyTime}`);
    }

    // Send a request to the server to save the order
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(async res => { 
          try {
              const jsonRes = await res.json();
              if (res.status !== 200) {
                  setIsError(true);
                  setMessage(jsonRes.message);
              } else {
                  onLoggedIn(jsonRes.token);
                  setIsError(false);
                  setMessage(jsonRes.message);
              }
          } catch (err) {
              console.log(err);
          };
      })
      .catch(err => {
          console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue Below to Checkout</Text> 
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Enter your adress for delivery" />
      <TouchableOpacity
        style={styles.button}
        onPress={handleDeliveryOrder}>
        <Text style={styles.buttonText}>Place Order for DELIVERY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePickUpOrder}>
        <Text style={styles.buttonText}>Place Order for PICK UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 70,
    textAlign: 'left',
    marginLeft:20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginBottom: 30,
    width: '80%',
    textAlign: 'center',
    marginLeft:40,
    fontSize: 10,
    fontSize: 20,
  },
  otherText:{
    fontSize: 20,
    marginBottom: 170,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    marginLeft: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartPage;