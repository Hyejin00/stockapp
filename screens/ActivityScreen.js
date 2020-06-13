import React from 'react';
import styled, {css} from 'styled-components/native';
import Colors from '../constants/Colors';
import ListHeadingText from '../components/ListHeadingText';
import IncreaseText from '../components/IncreaseText';
import HeadingText from '../components/HeadingText';
import NewsLists from '../components/NewsLists';

const View = styled.View`
  flex:1
  background-color: ${props => props.background};
`;

const CardView = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: white;
  padding : 25px;
  margin: 25px;
  align-items: center;
  justify-content: space-between;
  ${Platform.select({
    ios: css`shadow-color: #000;
    shadow-offset: {width: 0, height: -1};
    shadow-opacity: 0.5;
    shadow-radius: 5;`,
    android: css`elevation: 3;`
  })}
`;

const DATA = [
  {
    id:'1',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  },
  {
    id:'2',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  },
  {
    id:'3',
    headline:'ASDFASDFASDFASDFASDFASDFASDFADSFSADFASDFSDASDFASDFSDFADSFADSFADSFASDFSDF',
    press:'HYejincompanastasdfasdfa~~~~',
    photo:'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Frealfood%2F50b2b0b6ecf04c938d4a1f2b0c934204.jpg'
  }
];

const TitleView = styled.View`
  display: flex;
`;
export default function ActivityScreen(){
  return (
    <View background = {Colors.background}>
      <CardView>
        <ListHeadingText headingText='Active Price Alerts'/>
        <IncreaseText increase='0' background_color='purple'/>
      </CardView>
      <HeadingText title='BookMark' />
      <NewsLists newsdata={DATA}/>
    </View>
  );
}