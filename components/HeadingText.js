import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenTitle from './ScreenTitle';
import {TouchableWithoutFeedback} from 'react-native';

const HeadingView = styled.View`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
`;

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