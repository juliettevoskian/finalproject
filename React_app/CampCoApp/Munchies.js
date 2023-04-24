import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

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
