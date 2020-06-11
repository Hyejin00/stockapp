import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'S&P Futures',
    price:262500
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dow Futures',
    price:262500
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Nasdaq Future',
    price:262500
  },
  {
    id: '58694a0f-3da1-471f-bd-145',
    title: 'Nasdaq Future',
    price:262500
  },
  {
    id: '58694a0f-3da171f-bd-145',
    title: 'Nasdaq Future',
    price:262500
  },
];

const FlatList = styled.FlatList`
  height: 14%;
  background-color: red;
  flex-grow : 0;
`;

function Market({title, price}){
  return (
    <View>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  )
}

export default function MarketList(){
  return (
    <FlatList
    data={DATA}
    renderItem ={({item})=> (<Market title ={item.title} price = {item.price}/>)}
    keyExtractor={item => item.id}
    horizontal = {true}
    showsHorizontalScrollIndicator={false}
     />
  );
}