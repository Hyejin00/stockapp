import React from 'react';
import HeadingText from '../components/HeadingText';
import SearchLists from '../components/SearchLists';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';

const View = styled.View`
  flex:1
  background-color: ${props => props.background};
`;

const DATA = [
  {
    id:'1',
    name: 'AAPL',
    price: 352.84
  },
  {
    id:'2',
    name: 'AAPL',
    price: 352.84
  },
  {
    id:'3',
    name: 'AAPL',
    price: 352.84
  }
];
const T_DATA = [
  {
    id:'1',
    name: 'AAPL',
    price: 352.84
  },
  {
    id:'2',
    name: 'AAPL',
    price: 352.84
  },
  {
    id:'3',
    name: 'AAPL',
    price: 352.84
  }
];

export default function SearchScreen(){
  return (
    <View background = {Colors.background}>
      <HeadingText title='Recent' recent = {true}/>
      <SearchLists companies = {DATA}/>
      <HeadingText title='Trending today'/>
      <SearchLists companies = {T_DATA}/>
    </View>
  );
}