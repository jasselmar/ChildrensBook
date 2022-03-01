import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  PageViewer: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type PageViewerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PageViewer'
>;

export type {
  RootStackParamList,
  HomeScreenNavigationProp,
  PageViewerScreenNavigationProp,
};
