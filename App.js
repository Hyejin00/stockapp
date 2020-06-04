import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName ='ios-home';
            } else if (route.name === 'Search') {
              iconName = 'ios-search';
            } else if (route.name === 'News'){
              iconName = 'ios-card';
            } else if (route.name === 'Activity'){
              iconName = 'ios-notifications';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="News" component={HomeScreen} />
        <Tab.Screen name="Activity" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
