import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NewsScreen from '../screens/NewsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import QuoteScreen from '../screens/QuoteScreen';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import { useDispatch,  } from 'react-redux';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function getHeaderTitle(route,navigation) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      console.log(route);
      if(route.state.routes[route.state.index].state?.routes[route.state?.routes[route.state.index].state.index].name === 'Quote'){
        return route.state?.routes[route.state.index].state.routes[1].params.symbol;
      }else{
        return ()=><SearchBar navigation = { navigation }/>;
      }
    case 'News':
      return 'News';
    case 'Activity':
      return 'Activity';
  }
}
function getHeaderLeft(route,navigation) {
  const routeName = route.state?.routes[route.state.index].state?.routes[route.state?.routes[route.state.index].state.index].name ?? INITIAL_ROUTE_NAME;
  const [cart, setCart] = React.useState(false);
  const dispatch = useDispatch();
  
  switch (routeName) {
    case 'Quote':
      const newData = route.state?.routes[route.state.index].state.routes[1].params.symbol;
      const my_list_symbol = route.state?.routes[route.state.index].state.routes[1].params.my_list;
      my_list_symbol.map(dt=>{if(dt===newData){setCart(true);}});

      if(cart){
        return (
          ()=><TouchableWithoutFeedback
          onPress={()=>{
            AsyncStorage.getItem('mylist').then(data =>{
              const Data = JSON.parse(data);
              if(Data){
                const filterData = Data.filter(sym=>sym !== newData);
                AsyncStorage.setItem('mylist', JSON.stringify(filterData));
                dispatch({type:'CHANGE_LIST', payload:filterData});
              }
            })
          }}>
          <Ionicons
          name= 'ios-star'
          size={24}
          color='yellow'
          style={{marginLeft:20}}/>
        </TouchableWithoutFeedback>
        );
      }else{
        return (
          ()=><TouchableWithoutFeedback
            onPress={()=>{
              AsyncStorage.getItem('mylist').then(data =>{
                if(data){
                  const addData = [newData,...JSON.parse(data)];
                  console.log(addData);
                  AsyncStorage.setItem('mylist', JSON.stringify(addData));
                  dispatch({type:'CHANGE_LIST', payload:addData});
                }else{
                  AsyncStorage.setItem('mylist', JSON.stringify([newData]));
                  dispatch({type:'CHANGE_LIST', payload:[newData]});
                }
                setCart(true);
              })
            }}>
            <Ionicons
            name= 'ios-star-outline'
            size={24}
            color='black'
            style={{marginLeft:20}}/>
          </TouchableWithoutFeedback>
        );
      }
    default:
      return ()=>(
        <TouchableWithoutFeedback
          onPress={()=>{navigation.openDrawer()}}>
          <Ionicons
          name= 'md-menu'
          size={24}
          color='black'
          style={{marginLeft:20}}/>
        </TouchableWithoutFeedback>);
  }
}

const SearchStack = createStackNavigator();

function SearchStackScreen(){
  return (
    <SearchStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Quote" component={QuoteScreen} />
    </SearchStack.Navigator>
  );
}

export default function BottomTabNavigator({ navigation, route }){
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route, navigation),
    headerLeft: getHeaderLeft(route, navigation)
  });

  return(
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="newspaper" />,
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-notifications" />,
        }}
      />
    </BottomTab.Navigator>
  );
}