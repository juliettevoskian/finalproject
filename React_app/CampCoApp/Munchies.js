import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Pressable } from 'react-native';
import { useEffect, useState } from 'react';




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


  
    return (
    <Text style={{marginTop: 40}}>
          <FlatList
          data={menu}
          renderItem={({item}) => 
              <View style={styles.border}>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgb(255, 0, 0)'
                      : 'white'
                  },
                  styles.wrapperCustom
                ]}>
                {({ pressed }) => (
                  <View>
                    <Text style={styles.itemName}>{item.menuitem}</Text>
                    <Text style={styles.itemPrice}>{item.menuprice}</Text>
                
                  </View>
                )}
             </Pressable>
             </Text>
             <Button
             title="Add to Order"
             onPress={() => handleAddToOrder(item)}
             buttonStyle={styles.button}
           />
             </View>
              
          } />
      </Text>
   );
  }


const handleAddToOrder = item => {
  };
            
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    itemName: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemPrice: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    
    button: {
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    }
  });
