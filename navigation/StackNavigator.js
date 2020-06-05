import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="StackHome" 
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
