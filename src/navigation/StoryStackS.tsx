import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {StoryStackParamList} from '../types';
import {Story, PageViewer} from '../screens';
import {Theme} from '../theme';

const StoryStack = createNativeStackNavigator<StoryStackParamList>();

const HOME_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const DOGSTORY_OPTIONS: NativeStackNavigationOptions = {
  title: 'The Dog Story',
  headerBackTitle: '',
  headerStyle: {
    backgroundColor: Theme.colors.background,
  },
  headerTintColor: Theme.colors.error,
};

const StoryStackS = () => {
  return (
    <StoryStack.Navigator initialRouteName="Story">
      <StoryStack.Screen
        name="Story"
        options={HOME_OPTIONS}
        component={Story}
      />
      <StoryStack.Screen
        name="PageViewer"
        options={DOGSTORY_OPTIONS}
        component={PageViewer}
      />
    </StoryStack.Navigator>
  );
};

export default StoryStackS;
