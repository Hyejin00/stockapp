import React, { useEffect } from 'react';
import { ActivityIndicator } from "react-native";
import NewsLists from '../components/NewsLists';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGeneralNews } from '../actions/index';

const View = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
`;

export default function NewScreen(){
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const general_news = useSelector(state => state.general_news);
  const error = useSelector(state => state.error);

  useEffect(()=>{
    dispatch(fetchGeneralNews());
    // eslint-disable-next-line
  },[]);

  if(loading){
    return(
      <View background = {Colors.background}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View background = {Colors.background}>
      <NewsLists newsdata = {general_news}/>
    </View>
  );
}