import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './navigation/StackNavigator';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import { AsyncStorage } from 'react-native';

const Drawer = createDrawerNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));
AsyncStorage.getItem('mylist').then(data =>{
  const mylist = JSON.parse(data || '[]');
  store.dispatch({type:'CHANGE_LIST', payload:mylist});
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Root" component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}