import React from 'react';
import {View} from 'react-native';
import {Theme} from '../../theme';
import {Text} from '../index';
import {ScaledSheet} from 'react-native-size-matters';

interface Props {
  error: string;
}

const ValidationError = (props: Props) => {
  const {error} = props;
  return (
    <View style={styles.valiedationContainer}>
      <Text label={error} size={'small'} color={Theme.colors.error} />
    </View>
  );
};

const styles = ScaledSheet.create({
  valiedationContainer: {
    ...Theme.spacers.MB_2,
  },
});

export default ValidationError;
