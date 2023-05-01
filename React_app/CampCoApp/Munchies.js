import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Pressable, Alert, } from 'react-native';
import { useEffect, useState } from 'react';

const MenuScreen = () => {
    const [menuItems, setMenuItems] = useState([]);
}

export default function Munchies({ navigation }) {

const [inCart,setinCart] = useState([]);

const handleAddToOrder = (item) => {
  setinCart(inCart => [...inCart, item.menuitem])
  Alert.alert(`Added ${item.menuitem} to your cart!`);
  };  
    menu = [
        {menuitem: "MACARONI & CHEESE", menuprice: "$7.99"},
        {menuitem: "ONION RINGS", menuprice: "$6.49"},
        {menuitem: "FRIES", menuprice: "$4.99"},
        {menuitem: "SWEET POTATO FRIES", menuprice: "$5.99"},
        {menuitem: "MOZZARELLA STICKS", menuprice: "$7.99"},
        {menuitem: "MAC & CHEESE BITES", menuprice: "$6.49"},
        {menuitem: "NACHOS", menuprice: "$8.49"},
        {menuitem: "SMALL CHEESE PIZZA", menuprice:"7.50"},
        {menuitem: "MED CHEESE PIZZA", menuprice:"8.50"},
        {menuitem: "LARGE CHEESE PIZZA", menuprice:"10.00"},
    {menuitem: "SMALL BUFFALO CHICKEN PIZZA", menuprice:"11.49"},
    {menuitem: "MED BUFFALO CHICKEN PIZZA", menuprice:"14.99"},
    {menuitem: "LARGE BUFFALO CHICKEN PIZZA", menuprice:"19.99"},
    {menuitem: "SMALL BUFFALO CHICKEN PIZZA", menuprice:"11.49"},
    {menuitem: "SMALL BUFFALO CHICKEN PIZZA", menuprice:"11.49"},
    {menuitem: "CHICKEN FINGERS", menuprice:"7.49"},
    {menuitem: "BREAD STICKS", menuprice:"5.49"},
    {menuitem: "HAM & CHEESE", menuprice:"6.99"},
    {menuitem: "CHICKEN CEASER WRAP", menuprice:"10.49"},
    {menuitem: "CHEESEBURGER", menuprice:"10.50"},


  ]
   
    return (
    <Text>
          <FlatList
        ListFooterComponent={
        <View>  
          <Text style = {styles.orderHeader}>Your Current Order:</Text>
          <Text style = {styles.order}>{inCart.join('\n')}</Text>
          <TouchableOpacity
            style={styles.checkout}
             onPress={() => { 
            navigation.navigate('Cart')
            }}>
          <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>



        </View>
          }
          data={menu}
          renderItem={({item}) => 
              <View style={styles.border}>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgb(0, 0, 255)'
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
           
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    itemName: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemPrice: {
      fontSize: 20,
      marginBottom: 5,
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
    checkout: {
      backgroundColor: '#0000FF',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      width: '80%',
      alignItems: 'center',
      marginLeft: 50,
      marginTop:50,
    },
    orderHeader:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      marginTop: 50,
    },
    order:{
      fontSize: 20,
      marginLeft: 20,

    },
  
  });
