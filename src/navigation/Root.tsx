import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {Home, PageViewer} from '../screens';
import {Theme} from '../theme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HOME_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const DOGSTORY_OPTIONS: NativeStackNavigationOptions = {
  title: 'The Dog Story',
  headerBackTitle: '',
  headerStyle: {
    backgroundColor: Theme.colors.background,
  },
  headerTintColor: Theme.colors.text,
};

const Root = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" options={HOME_OPTIONS} component={Home} />
      <RootStack.Screen
        name="PageViewer"
        options={DOGSTORY_OPTIONS}
        component={PageViewer}
      />
    </RootStack.Navigator>
  );
};

export default Root;
