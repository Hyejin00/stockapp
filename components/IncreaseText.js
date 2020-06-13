import React from 'react';
import styled from 'styled-components/native';

const IncreaseView = styled.View`
  display : flex;
  margin-left:4px;
  align-items: center;
  border-radius: 3px;
  padding:4px;
  padding-left:8px;
  padding-right:8px;
  background-color: ${props => props.background_color};
`;

const IncreasseText = styled.Text`
  color: white;
  font-size: 16px;
`;

export default function IncreaseText({ increase, background_color }){
  return (
    <IncreaseView background_color = {background_color}>
      <IncreasseText>{increase}</IncreasseText>
    </IncreaseView>
  );
}