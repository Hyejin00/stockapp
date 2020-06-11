import React from 'react';
import styled from 'styled-components/native';
import MyListsView from '../components/MyListsView';
import HeadingText from '../components/HeadingText';
import MarketList from '../components/MarketList';

HomeScreen.navigationOptions = {
  header: 'Home',
};
const SafeAreaView = styled.SafeAreaView`
  padding:9px;
  padding-bottom: -9px;
  background-color: green;
  flex:1;
`;

export default function HomeScreen(){
  return (
    <SafeAreaView>
      <MarketList />
      <HeadingText title = 'Lists' more = {true}/>
      <MyListsView />
    </SafeAreaView>
  );
}