import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  background-color: white;
`;

const PriceView = styled.View`
display : flex;
align-items: center;
flex-direction: row;
`;

const CompanyName = styled.Text`
font-weight: bold;
font-size: 16px;
`;

const PriceText = styled.Text`
font-weight: 200;
font-size: 15px;
`;

const FlatList = styled.FlatList`
  flex-grow : 0;
`;

function SearchList({name, price}){
  return (
    <View>
      <CompanyName>{name}</CompanyName>
      <PriceView>
        <PriceText>{price}</PriceText>
        <Ionicons 
          name = 'ios-star-outline'
          size = {26}
          style = {{margin: 5}}
          color = '#9A9A9A'
        />
      </PriceView>
    </View>
  );
}
export default function SearchLists({ companies }){
  return (
    <FlatList 
      data={companies}
      renderItem={({ item }) => <SearchList name = {item.name} price = {item.price}/>}
      keyExtractor={item => item.id}
    />
  );
}