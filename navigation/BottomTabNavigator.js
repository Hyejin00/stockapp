import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NewsScreen from '../screens/NewsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import QuoteScreen from '../screens/QuoteScreen';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';

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
    case 'Quote':
      return route.state.routes[route.state.index].params.symbol;
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
    headerLeft: ()=>(
    <TouchableWithoutFeedback
      onPress={()=>{navigation.openDrawer()}}>
      <Ionicons
      name= 'md-menu'
      size={24}
      color='black'
      style={{marginLeft:20}}/>
    </TouchableWithoutFeedback>
    )
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