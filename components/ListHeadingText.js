import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-weight: 200;
  font-size: 15px;
`;

export default function ListHeadingText({ headingText }){
  return (
    <Text>{headingText}</Text>
  );
}