import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import IncreaseText from '../IncreaseText';

const View = styled.View`
  margin-top: 5px;
  display : flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PriceView = styled.View`
  display : flex;
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text`
font-weight: bold;
font-size: 16px;
`;

function Stock({title, price, increase}) {
  return (
    <View>
      <Text>{title}</Text>
      <PriceView>
        <Text>{price}</Text>
        <IncreaseText increase={increase} background_color = 'green' />
      </PriceView>
    </View>
  );
}

export default function CompanyList ({companylist}) {
  return (
    <FlatList 
      data = {companylist}
      renderItem={({ item }) => <Stock title={item.title} price = {item.price} increase = {item.increase}/>}
      keyExtractor={item => item.id}
    />
  );
}