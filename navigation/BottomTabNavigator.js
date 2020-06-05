import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NewsScreen from '../screens/NewsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'News':
      return 'News';
    case 'Activity':
      return 'Activity';
  }
}

export default function BottomTabNavigator({ navigation, route }){
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route),
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
        component={SearchScreen}
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