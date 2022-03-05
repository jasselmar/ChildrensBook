import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoryStackS from './StoryStackS';
import GamesStack from './GamesStack';
import {MainBottomTabParamList} from '../types';
import {Avatar} from 'react-native-paper';
import {Theme} from '../theme';

const BookOutline = () => (
  <Avatar.Icon
    size={40}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="book-open-page-variant-outline"
  />
);

const BookFilled = () => (
  <Avatar.Icon
    size={40}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="book-open-page-variant"
  />
);

const GameOutline = () => (
  <Avatar.Icon
    size={45}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="gamepad-square-outline"
  />
);

const GameFilled = () => (
  <Avatar.Icon
    size={45}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="gamepad-square"
  />
);

const RootTab = createBottomTabNavigator<MainBottomTabParamList>();

const Root = () => {
  return (
    <RootTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'StoryStackS') {
            return focused ? <BookFilled /> : <BookOutline />;
          } else if (route.name === 'GamesStack') {
            return focused ? <GameFilled /> : <GameOutline />;
          }
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 10,
          backgroundColor: Theme.colors.error,
          borderTopColor: 'transparent',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: -20,
        },
      })}>
      <RootTab.Screen name="StoryStackS" component={StoryStackS} />
      <RootTab.Screen name="GamesStack" component={GamesStack} />
    </RootTab.Navigator>
  );
};

export default Root;
