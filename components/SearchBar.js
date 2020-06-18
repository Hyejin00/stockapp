import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

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

const TextInput = styled.TextInput`
  width:100%;
`;

export default function SearchBar({ navigation }){
  const [symbol, setSymbol] = React.useState('');
  return(
    <View>
      <Ionicons name='ios-search' size = {26} style={{marginRight:10, marginLeft:5}}color = 'black'/>
      <TextInput onChangeText={text => setSymbol(text)} value={symbol} placeholder='write Symbol..' onSubmitEditing={(e)=>{
        navigation.navigate('Quote', {symbol: e.nativeEvent.text});
      }}/>
    </View>
  );
}