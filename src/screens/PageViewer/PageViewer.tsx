import React from 'react';
import {View} from 'react-native';
//import {PageViewerScreenNavigationProp} from '../../types';
import PagerView from 'react-native-pager-view';
import {ScaledSheet} from 'react-native-size-matters';
import {Text} from '../../components';
import {Theme} from '../../theme';

/* type Props = {
  navigation: PageViewerScreenNavigationProp;
}; */

const PageViewer = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0} transitionStyle="curl">
      <View key="1" style={styles.child}>
        <Text label={'History1'} size={'largeTitle'} />
      </View>
      <View key="2" style={styles.child}>
        <Text label={'History2'} size={'largeTitle'} />
      </View>
    </PagerView>
  );
};

const styles = ScaledSheet.create({
  pagerView: {
    flex: 1,
  },
  child: {
    backgroundColor: Theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PageViewer;
