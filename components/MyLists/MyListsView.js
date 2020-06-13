import React, { useState } from 'react';
import styled, {css} from 'styled-components/native';
import {TouchableWithoutFeedback, FlatList, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CompanyList from './CompanyList';

const CardView = styled.View`
  border-radius: 10px;
  background-color: white;
  padding : 25px;
  margin: 10px;
  ${Platform.select({
    ios: css`shadow-color: #000;
    shadow-offset: {width: 0, height: -1};
    shadow-opacity: 0.5;
    shadow-radius: 5;`,
    android: css`elevation: 3;`
  })}
`;

const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const NameView = styled.View`
  display: flex;
  flex-direction: column;
`;
const NameText = styled.Text`
font-weight: bold;
font-size: 21px;
`;
const CountText = styled.Text`
font-size: 14px;
`;

function NameContents({name, count}){
  return(
    <NameView>
      <NameText>{name}</NameText>
      <CountText>{count} symbols</CountText>
    </NameView>
  );
}

function MyList({title, companies}){
  const [istoggled, setIsToggled] = useState(false);
  return (
    <CardView>
      <TitleView>
        <NameContents name={title} count = {companies.length}/>
        <TouchableWithoutFeedback onPress={()=>{
          setIsToggled((cur)=>{
            return !cur
          })
        }}>
          {istoggled?
            <Ionicons name="ios-arrow-up" size={24} color="black" />:
            <Ionicons name="ios-arrow-down" size={24} color="black" />
            }
        </TouchableWithoutFeedback>
      </TitleView>
      {istoggled && <CompanyList companylist={companies}/>}
    </CardView>
  );
}

export default function MyListsView({mylist}){
  return (
    <FlatList
      data={mylist}
      renderItem={({ item }) => <MyList title={item.title} companies = {item.companies}/>}
      keyExtractor={item => item.id}
    />
  );
}