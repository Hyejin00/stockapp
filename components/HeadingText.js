import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback, Modal, View } from 'react-native';
import Colors from '../constants/Colors';

const HeadingView = styled.View`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  background-color: ${props => props.background};
`;

const ModalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const CardView = styled.View`
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  padding-left : 30px;
  padding-right : 30px;
  width:150px;
  ${Platform.select({
    ios: css`shadow-color: #000;
    shadow-offset: {width: 0, height: -1};
    shadow-opacity: 0.5;
    shadow-radius: 5;`,
    android: css`elevation: 3;`
  })}
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

const ClearText = styled.Text`
  font-size:15px;
  color:#2B93E6;
`;

function ScreenTitle ({title}){
  return(
    <Text>{title}</Text>
  );
}

export default function HeadingText ({title, recent, color}){
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <HeadingView background = {color?color:Colors.background}>
      <ScreenTitle title = {title}/>
      {recent &&
        <TouchableWithoutFeedback>
          <ClearText>CLEAR</ClearText>
        </TouchableWithoutFeedback>
      }
    </HeadingView>
  );
}