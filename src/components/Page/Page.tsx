import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '../../components';
import {PageItem} from '../../types';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../theme';

type Props = {
  key: number;
  page: PageItem;
};

const Page = (props: Props) => {
  const {key, page} = props;
  return (
    <View key={key} style={styles.child}>
      <Image source={{uri: page.img}} style={{width: 500, height: 376}} />
      <View style={styles.container}>
        <Text label={page.content} size={'title3'} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  child: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container: {
    ...Theme.spacers.MT_2,
    ...Theme.spacers.PH_5,
  },
});

export default Page;
