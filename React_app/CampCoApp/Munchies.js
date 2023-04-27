import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, ListItem } from 'react-native-elements'; 

const MenuScreen = () => {
    const [menuItems, setMenuItems] = useState([]);
}

export default function Munchies({ navigation, route }) {
    menu = [
        {menuitem: "MACARONI & CHEESE ", menuprice: "$7.99"},
        {menuitem: "ONION RINGS", menuprice: "$6.49"},
        {menuitem: "FRIES", menuprice: "$4.99"},
        {menuitem: "SWEET POTATO FRIES", menuprice: "$5.99"},
        {menuitem: "MOZZARELLA STICKS", menuprice: "$7.99"},
        {menuitem: "MAC & CHEESE BITES", menuprice: "$6.49"},
        {menuitem: "NACHOS", menuprice: "$8.49"},
    ]
}
const handleAddToOrder = item => {
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>${item.price.toFixed(2)}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="Add to Order"
              onPress={() => handleAddToOrder(item)}
              buttonStyle={styles.button}
            />
          </ListItem>
        )}
      />
    </View>
  );


            
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007aff',
      borderRadius: 10,
      paddingHorizontal: 20,
    },
  });
  

