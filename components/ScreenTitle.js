import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
  background-color: papayawhip;
`;

export default function ScreenTitle ({title}){
  return(
    <Text>{title}</Text>
  );
}