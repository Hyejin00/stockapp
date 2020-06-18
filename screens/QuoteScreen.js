import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Platform } from "react-native";
import styled, { css } from 'styled-components/native';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrice } from '../actions/index';
import HeadingText from '../components/HeadingText';
import { Dimensions, FlatList } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function QuoteScreen({ route }){

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const quote = useSelector(state => state.quote);

  console.log(quote);

  useEffect(()=>{
    dispatch(fetchPrice(route.params.symbol));
    // eslint-disable-next-line
  },[]);

  const Loading_View = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background};
  `;

  const G_View = styled.View`
    display: flex;
    flex-direction: row;
    width:100%;
    background-color: ${props => props.background};
  `;

  const B_View = styled.View`
    padding-bottom: 80px;
    margin-bottom:20px;
    background-color: ${props => props.background};
    ${Platform.select({
      ios: css`shadow-color: #000;
      shadow-offset: {width: 0, height: -1};
      shadow-opacity: 0.5;
      shadow-radius: 5;`,
      android: css`elevation: 3;`
    })}
  `
  const P_View = styled.View`
    margin:10px;
    background-color: ${props => props.background};
  `

  const C_Price_Text = styled.Text`
    font-weight: bold;
    font-size: 40px;
  `;
  const Desc_Text = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #7F8C8D;
  `;
  const Price_Text = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 7px;
    color: ${props => props.color};
  `;

  const G_Text = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #515A5A;
    flex: 1;
    text-align: center;
  `;

  if(loading){
    return(
      <Loading_View background = {Colors.background}>
        <ActivityIndicator size="large" color="#00ff00" />
      </Loading_View>
    );
  }
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      }
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(28, 40, 51, ${opacity})`,
    barPercentage: 0.5,
  };


  if(quote){
    return(
      <ScrollView>
        <B_View background = 'white'>
          <HeadingText title = {route.params.symbol} color = 'white' />
          <P_View background = 'white'>
            <C_Price_Text>{quote?.c}</C_Price_Text>
            <Desc_Text>At close</Desc_Text>
            <Price_Text color={(quote?.c-quote?.pc)<0?'#E74C3C':'#2ECC71'}>{quote.c-quote.pc}</Price_Text>
            <Desc_Text>After hrs</Desc_Text>
            <Price_Text color={(quote?.c-quote?.pc)<0?'#E74C3C':'#2ECC71'}>{quote.c-quote.pc}</Price_Text>
          </P_View>
          <LineChart
            style={{ marginTop: 10}}
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          <G_View background = 'white'>
            {[5,15,30,60,'D','W','M'].map((text)=>(
              <G_Text key={text}>{text}</G_Text>
            ))}
          </G_View>
        </B_View>
      </ScrollView>
    );
  }else{
    return (
      <B_View background = {Colors.background}></B_View>
    );
  }
}