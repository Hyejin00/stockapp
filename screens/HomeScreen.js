import React from 'react';
import styled from 'styled-components/native';
import MyListsView from '../components/MyLists/MyListsView';
import HeadingText from '../components/HeadingText';
import MarketList from '../components/MarketList';
import Colors from '../constants/Colors';

const SafeAreaView = styled.SafeAreaView`
  padding:9px;
  padding-bottom: -9px;
  flex:1;
  background-color: ${props => props.background};
`;

const DATA = [
  { 
    id: '1',
    title:'ㄹㄹ',
    companies:[
      {
        title: 'AALP',
        price:12.7,
        increase: 0.42,
        id: '1',
      },
      {
        title: 'AALPA',
        price:12.7,
        increase: 0.42,
        id: '2',
      },
      {
        title: 'AALPAA',
        price:12.7,
        increase: 0.42,
        id: '3',
      },
      {
        title: 'AALPAAA',
        price:12.7,
        increase: 0.42,
        id: '4',
      }
    ]
  },
  { 
    id: '2',
    title:'ㄹㄹ',
    companies:[
      {
        title: 'AALP',
        price:12.7,
        increase: 0.42,
        id: '1',
      },
      {
        title: 'AALPA',
        price:12.7,
        increase: 0.42,
        id: '2',
      },
      {
        title: 'AALPAA',
        price:12.7,
        increase: 0.42,
        id: '3',
      },
      {
        title: 'AALPAAA',
        price:12.7,
        increase: 0.42,
        id: '4',
      }
    ]
  }
];

export default function HomeScreen(){
  return (
    <SafeAreaView background = {Colors.background}>
      <MarketList />
      <HeadingText title = 'Lists' more = {true} />
      <MyListsView mylist={DATA}/>
    </SafeAreaView>
  );
}