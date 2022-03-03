import React from 'react';
import {View, Image} from 'react-native';
//import {PageViewerScreenNavigationProp} from '../../types';
import PagerView from 'react-native-pager-view';
import {ScaledSheet} from 'react-native-size-matters';
import {Page, Text} from '../../components';
import {Theme} from '../../theme';
import {useRoute} from '@react-navigation/native';
import {ActivityIndicator, Snackbar} from 'react-native-paper';
import {useSQLite} from '../../hooks';

/* type Props = {
  navigation: PageViewerScreenNavigationProp;
}; */

const PageViewer = () => {
  const {params} = useRoute();
  const {pages, loading, error, refetchPages} = useSQLite();

  const tryAgain = () => {
    return refetchPages?.();
  };

  return (
    <>
      <Snackbar
        visible={error}
        duration={0}
        wrapperStyle={styles.snackbar}
        onDismiss={() => null}
        action={{
          label: 'RETRY',
          onPress: tryAgain,
        }}>
        Couldn't fetch the story.
      </Snackbar>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        transitionStyle="curl">
        <View key="1" style={styles.child}>
          <Image
            source={require('../../../assets/images/illustrations/illustration.jpg')}
            width={500}
            height={376}
          />
          <View style={styles.container}>
            <Text
              label={`My name is ${params?.name} and I’m a very happy ${params?.breed}`}
              size={'title3'}
            />
          </View>
        </View>
        {loading ? (
          <View key="2" style={styles.child}>
            <View>
              <ActivityIndicator animating={true} color={Theme.colors.text} />
            </View>
          </View>
        ) : (
          pages?.map(page => <Page key={page.id + 2} page={page} />)
        )}
      </PagerView>
    </>
  );
};

const styles = ScaledSheet.create({
  pagerView: {
    flex: 1,
  },
  child: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container: {
    ...Theme.spacers.PT_2,
    ...Theme.spacers.PH_5,
  },
  snackbar: {top: '8%', zIndex: 1},
});

export default PageViewer;
