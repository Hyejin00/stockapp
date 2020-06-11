import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native';

const HeadingView = styled.View`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
  background-color: papayawhip;
`;

function ScreenTitle ({title}){
  return(
    <Text>{title}</Text>
  );
}

export default function HeadingText ({title, more}){
  return (
    <HeadingView>
      <ScreenTitle title = {title}/>
      {more && 
      <TouchableWithoutFeedback>
        <Ionicons name = 'ios-more' size={26} color='black'/>
      </TouchableWithoutFeedback>}
    </HeadingView>
  );
}