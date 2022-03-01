import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {Home, PageViewer} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const NAVIGATOR_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const Root = () => {
  return (
    <RootStack.Navigator
      screenOptions={NAVIGATOR_OPTIONS}
      initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="PageViewer" component={PageViewer} />
    </RootStack.Navigator>
  );
};

export default Root;
