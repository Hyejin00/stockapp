import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import ListHeadingText from './ListHeadingText';
import styled from 'styled-components/native';

const no_image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAP1BMVEX////MzMzOzs7R0dHy8vLi4uLf39/n5+f6+vqkpKT29vba2trNzc3Jycnr6+unp6e7u7uysrLBwcGsrKzCwsIBkxNWAAAEVUlEQVR4nO2c25qjKBRGUUBOykF8/2edDZjEVNdMKqnuqZb866I+UJK45OBGsRgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8XrRx/Aaf0Tx/5b0BPw4tMHej78VX7Uf30sX8fWUTm8UnmWvk/fezfRy5Ui5N8kolazNKJ/fM9uIwWndgvL3RgtcD+9HzdXgvvxaWPvJm99lMJcibRsu9lrxVvV3nua/697G9BEbcl/1b21l1DvMWVDW9lf4yH5zLyvZf9crNfStOH/fvYH2eCb9fyD6Pe8H6jHlP3Db9re62cvJ/3aXmx7z7a0Y42tqjmhufjPM+u+0i31fPiPsz66yznkunXXo3Dp/p3ZXq19/wyvv3HPZ9e7QW/De//rt+pvXXHsE5eN99ubFT6tP/4cGPf5d1lYr/Tpf3tsn7U14ovw71+l/bqlyc7o7JCtq1H/R7tPf8oT9N5x+c9edDv0F58In8Hv0Y7vjt7y5cH9jf97uy1e+Q+XO5pdmj/tQf5e/jbm716bH7Q78zez4/Fd/3ysb7s7RNLOIp+V/b60bXujqkre8++Mtzf6Xdkr6Yvd/od2Y/98FSzb/BuVq68COzPDuxhD3vYP0EH9urZQOfK3MEabftkkHvD2cff/tcjpldezbitWzw52opX6ODNDAAAAAAAAEBPCFunKbrNVqzw4jphrdus3fOU0OxQ9FK8ZLRtnG3Go9etPIzUbvVlTdYQU7wuYJHrpDXftrpKR2/bUhOWr5c1Hm5JKY7SMrVVVv/ZT/zFWBMSHbNdjGTMpRBjDHm/VeXMqG3MYSkZSQXrmkWVzFabg95MLsWTopKJUjGd7S6PNTkNu72PgXvveT0frNhzsk8pF1k6Kc2e59z2UznnveLcUslF0Sf92Vq+pVojq2rPc6yHH/NQ9zX7OGTqGyLXcpRYqbrruo0U6voFplvJnzL4DtZEqjiti/0WmgMPse7b7VWKpcZ5s5d5cClSa7A5XMfH89qvIqWp2ZvW4aU52ie7Bc9SEtVej2HSa1ClNYQyWhLU70Nc5nleznYKyJ6OffPDwV7d22uZF28GVu19jJ65PGiyN3XYyHmkb8gp7QPEmSj2Ys38WPfTh7pnKa9B6Go/5bRuMdPGWvdMqZlODHUeL4Q42wWv2rMppBQkW0J9tZaNYav7rvY0zEem2+gYgjEmhKnYi1ZqOHO/L9e7kMnelSolUuZ139XeBuOavU9RWmHHvGoa87dW6uT2TKZibylycZOjv63/Xu2ZKuNdsXemvXmdqN6lySsVX0OxLynnztb0be3jejAl1vMphJxN2p/OtFhvPxVMpyTtul/jV0PNgxsqnQOFA86Empx/RuJl9Fh1hBuLspZjvP3XHT+qcknbs5QSlu8P7RQvHxN8iWPZ4venWvLXHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8If4B61o8WAw3S3YAAAAASUVORK5CYII=';

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
margin-top: 6px;
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


function NewsList({ headline, image, url }){
  return (
    <View>
      <ContextView>
        <ListHeadingText headingText={headline}/>
        <PressView>
          <FontAwesome name="bookmark-o" size={16} color="gray" />
        </PressView>
      </ContextView>
      <Image source={image?{uri:image}:{uri:no_image}}/>
    </View>
  );
}
export default function NewsLists({ newsdata }){
  
  return (
    <FlatList 
      data={newsdata}
      renderItem={({ item }) => <NewsList headline={item.headline} summary={item.summary} image={item.image} url={item.url}/>}
      keyExtractor={item => item.id.toString()}
    />
  );
}