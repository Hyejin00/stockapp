import React from 'react';
import {View, Text} from 'react-native';

HomeScreen.navigationOptions = {
  header: 'Home',
};

export default function HomeScreen(){
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}