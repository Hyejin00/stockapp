import React, { useState } from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardView = styled.View`
  border-radius: 10px;
  background-color: white;
  padding : 25px;
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

function ContentsView(){
  return(
    <View>
      <Text>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</Text>
    </View>
  );
}

export default function MyListsView(){
  const [istoggled, setIsToggled] = useState(false);
  return (
    <CardView>
      <TitleView>
        <NameContents name='ㄹㄹ' count = {36}/>
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
      {istoggled && <ContentsView />}
    </CardView>
  );
}