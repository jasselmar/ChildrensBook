import React from 'react';
import {View, Text} from 'react-native';
import {PageViewerScreenNavigationProp} from '../../types';

type Props = {
  navigation: PageViewerScreenNavigationProp;
};

const PageViewer = (props: Props) => {
  return (
    <View>
      <Text>This is PageViewer</Text>
    </View>
  );
};

export default PageViewer;
