import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {GameStackParamList} from '../types';
import {GamesHome} from '../screens';

const GStack = createNativeStackNavigator<GameStackParamList>();

const GAMES_HOME: NativeStackNavigationOptions = {
  headerShown: false,
};

const GamesStack = () => {
  return (
    <GStack.Navigator initialRouteName="GamesHome">
      <GStack.Screen
        name="GamesHome"
        options={GAMES_HOME}
        component={GamesHome}
      />
    </GStack.Navigator>
  );
};

export default GamesStack;
