import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/Colors';

const HeadingView = styled.View`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  background-color: ${props => props.background};
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

const ClearText = styled.Text`
  font-size:15px;
  color:#2B93E6;
`;

function ScreenTitle ({title}){
  return(
    <Text>{title}</Text>
  );
}

export default function HeadingText ({title, more, recent, color}){
  return (
    <HeadingView background = {color?color:Colors.background}>
      <ScreenTitle title = {title}/>
      {more && 
      <TouchableWithoutFeedback>
        <Ionicons name = 'ios-more' size={26} color='black'/>
      </TouchableWithoutFeedback>}
      {recent &&
        <TouchableWithoutFeedback>
          <ClearText>CLEAR</ClearText>
        </TouchableWithoutFeedback>
      }
    </HeadingView>
  );
}