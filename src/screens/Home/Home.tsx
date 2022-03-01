import React from 'react';
import {Text} from 'react-native';
import {HomeScreenNavigationProp} from '../../types';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  return <Text>This is home</Text>;
};

export default Home;
