import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import ListHeadingText from './ListHeadingText';
import styled from 'styled-components/native';

const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  background-color: white;
`;

const ContextView = styled.View`
display : flex;
flex-direction: column;
width:70%;
padding:5px;
`;

const PressView = styled.View`
display : flex;
flex-direction: row;
align-items: center;
padding 5px;
margin-left: 6px;
`;

const PressName = styled.Text`
color: gray;
font-size: 15px;
margin-left: 15px;
`;

const FlatList = styled.FlatList`
  flex-grow : 0;
`;

const Image = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 15px;
`;


function NewsList({ headline, press, photo }){
  return (
    <View>
      <ContextView>
        <ListHeadingText headingText={headline}/>
        <PressView>
        <FontAwesome name="bookmark-o" size={16} color="gray" />
          <PressName>{press}</PressName>
        </PressView>
      </ContextView>
      <Image source={{uri:photo}}/>
    </View>
  );
}
export default function NewsLists({ newsdata }){
  return (
    <FlatList 
      data={newsdata}
      renderItem={({ item }) => <NewsList headline={item.headline} press={item.press} photo={item.photo}/>}
      keyExtractor={item => item.id}
    />
  );
}