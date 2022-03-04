import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {GameStackParamList} from '../types';
import {GamesHome, HelpDog} from '../screens';
import {Theme} from '../theme';

const GStack = createNativeStackNavigator<GameStackParamList>();

const GAMES_HOME: NativeStackNavigationOptions = {
  headerShown: false,
};

const HELP_DOG: NativeStackNavigationOptions = {
  title: 'Help the dog',
  headerBackTitle: '',
  headerStyle: {
    backgroundColor: Theme.colors.background,
  },
  headerTintColor: Theme.colors.error,
};

const GamesStack = () => {
  return (
    <GStack.Navigator initialRouteName="GamesHome">
      <GStack.Screen
        name="GamesHome"
        options={GAMES_HOME}
        component={GamesHome}
      />
      <GStack.Screen name="HelpDog" options={HELP_DOG} component={HelpDog} />
    </GStack.Navigator>
  );
};

export default GamesStack;
