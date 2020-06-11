import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';
import {TextInput, Platform} from 'react-native';

const View = styled.View`
display:flex;
flex-direction: row;
border-radius: 4px;
background-color: white;
padding: 5px;
${Platform.select({
  ios: css`shadow-color: #000;
  shadow-offset: {width: 0, height: -1};
  shadow-opacity: 0.5;
  shadow-radius: 5;`,
  android: css`elevation: 3;`
})}
`;

export default function SearchBar(){
  const [value, onChangeText] = React.useState('');
  return(
    <View>
      <Ionicons name='ios-search' size = {26} style={{marginRight:10, marginLeft:5}}color = 'black'/>
      <TextInput onChangeText={text => onChangeText(text)} value={value} placeholder='write Symbol..'/>
    </View>
  );
}