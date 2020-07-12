import React, { useEffect } from 'react';
import { ActivityIndicator } from "react-native";
import Colors from '../constants/Colors';
import styled from 'styled-components/native';
import MyListsView from '../components/MyLists/MyListsView';
import HeadingText from '../components/HeadingText';
import MarketList from '../components/MarketList';
import { fetchMyList } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

const SafeAreaView = styled.SafeAreaView`
  padding:9px;
  padding-bottom: -9px;
  flex:1;
  background-color: ${props => props.background};
`;

const View = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
`;



export default function HomeScreen(){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const my_list_symbol = useSelector(state => state.my_list_symbol);
  const my_list = useSelector(state => state.my_list);
  console.log(my_list_symbol);

  useEffect(()=>{
    dispatch(fetchMyList(my_list_symbol));
    // eslint-disable-next-line
  },[]);

  const DATA = [{
    id:'1',
    title:'My List',
    companies: [{
      symbol: 'APPL',
      price: 15
    }]
  }];

  if(loading){
    return(
      <View background = {Colors.background}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <SafeAreaView background = {Colors.background}>
      <MarketList />
      <HeadingText title = 'Lists' more = {true} />
      <MyListsView mylist={DATA}/>
    </SafeAreaView>
  );
}