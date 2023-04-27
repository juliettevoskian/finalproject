import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Button, ListItem } from 'react-native-elements'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
=======
// import { Button, ListItem } from 'react-native-elements'; 
>>>>>>> d1aaa583ca3b1d8c62d25dc3334f286615ce30fd

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
<<<<<<< HEAD
}
const handleAddToOrder = item => {
  };
  
  // return (
  //   <Text style={{marginTop: 40}}>
  //         <FlatList
  //         data={menu}
  //         renderItem={({item}) => 
  //             <View style={styles.border}>                                                                                                                                                 
  //               <Text style={{flex: 1, flexWrap: 'wrap'}}>
  //             <Pressable
  //               onPress={() => {
  //                 navigation.navigate('//cart');
  //               }}
  //               style={({ pressed }) => [
  //                 {
  //                   backgroundColor: pressed
  //                     ? 'rgb(255, 0, 0)'
  //                     : 'white'
  //                 },
  //                 styles.wrapperCustom
  //               ]}>
  //               {({ pressed }) => (
  //                 <View>
  //                   <Text style={styles.itemName}>{item.menuName}</Text>
  //                   <Text style={styles.itemPrice}>{item.menuprice}</Text>
=======
    return (
    <Text style={{marginTop: 40}}>
          <FlatList
          data={menu}
          renderItem={({item}) => 
              <View style={styles.border}>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>
              <Pressable
                onPress={() => {
                  navigation.navigate('//cart');
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
                    <Text style={styles.itemName}>{item.menuName}</Text>
                    <Text style={styles.itemPrice}>{item.menuprice}</Text>
>>>>>>> d1aaa583ca3b1d8c62d25dc3334f286615ce30fd
                    
  //                 </View>
  //               )}
  //             </Pressable>
  //             </Text>
  //             <Button
  //             title="Add to Order"
  //             onPress={() => handleAddToOrder(item)}
  //             buttonStyle={styles.button}
  //           />
  //             </View>
              
<<<<<<< HEAD
  //         } />
  //     </Text>
  // );
=======
          } />
      </Text>
        );
}
const handleAddToOrder = item => {
  };
  
  
>>>>>>> d1aaa583ca3b1d8c62d25dc3334f286615ce30fd


            
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
  

