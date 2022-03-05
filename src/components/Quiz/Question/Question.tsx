import React from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../../theme';
import {Text} from '../../../components';

type Props = {
  question: string;
};

const Question = (props: Props) => {
  const {question} = props;
  return (
    <Animated.View entering={FadeIn.duration(1500)} style={styles.question}>
      <Text label={question} size={'title2'} textAlignment={'center'} />
    </Animated.View>
  );
};

const styles = ScaledSheet.create({
  question: {
    ...Theme.spacers.PA_7,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.colors.error,
  },
});

export default Question;
