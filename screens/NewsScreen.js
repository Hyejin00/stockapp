import React from 'react';
import NewsLists from '../components/NewsLists';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';

const View = styled.View`
  flex:1
  background-color: ${props => props.background};
`;

const DATA = [
  {
    id:'1',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  },
  {
    id:'2',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  },
  {
    id:'3',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  }
];

export default function NewScreen(){
  return (
    <View background = {Colors.background}>
      <NewsLists newsdata = {DATA}/>
    </View>
  );
}