import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {GameStackParamList} from '../types';
import {GamesHome, Quiz, HelpTheDog} from '../screens';
import {Theme} from '../theme';

const GStack = createStackNavigator<GameStackParamList>();

const GAMES_HOME: StackNavigationOptions = {
  headerShown: false,
};

const HELP_DOG: StackNavigationOptions = {
  title: 'Help the dog',
  headerBackTitle: ' ',
  headerStyle: {
    backgroundColor: Theme.colors.background,
  },
  headerTintColor: Theme.colors.error,
};

const QUICK_QUIZ: StackNavigationOptions = {
  title: 'Quick quiz',
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
      <GStack.Screen name="HelpDog" options={HELP_DOG} component={HelpTheDog} />
      <GStack.Screen name="Quiz" options={QUICK_QUIZ} component={Quiz} />
    </GStack.Navigator>
  );
};

export default GamesStack;
