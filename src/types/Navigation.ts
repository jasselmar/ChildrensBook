import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//Tab
type MainBottomTabParamList = {
  StoryStackS: undefined;
  GamesStack: undefined;
};

type GamesScreenNavigationProp = BottomTabNavigationProp<
  MainBottomTabParamList,
  'GamesStack'
>;

//GameStack

type GameStackParamList = {
  GamesHome: undefined;
};

//StoryStack
type StoryStackParamList = {
  Story: undefined;
  PageViewer: undefined;
};

type StoryScreenNavigationProp = NativeStackNavigationProp<
  StoryStackParamList,
  'Story'
>;
type PageViewerScreenNavigationProp = NativeStackNavigationProp<
  StoryStackParamList,
  'PageViewer'
>;

export type {
  StoryStackParamList,
  StoryScreenNavigationProp,
  PageViewerScreenNavigationProp,
  MainBottomTabParamList,
  GamesScreenNavigationProp,
  GameStackParamList,
};
