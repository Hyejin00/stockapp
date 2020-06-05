import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function TabBarIcon (props){
  if(props.name ==='newspaper'){
    return (
      <MaterialCommunityIcons 
      name={props.name}
      size={26}
      style = {{marginBottom: -3}}
      color={props.focused? Colors.tabIconSelected : Colors.tabIconDefault} 
      />
    );
  }else{
    return (
      <Ionicons 
        name = {props.name}
        size = {26}
        style = {{marginBottom: -3}}
        color = {props.focused? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}