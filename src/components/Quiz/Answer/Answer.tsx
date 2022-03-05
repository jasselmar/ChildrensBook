import React from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../../theme';
import {Text} from '../../../components';

type Props = {
  touched: Boolean;
  variable: string;
  answer: string;
  onPress: () => void;
};

const Answer = (props: Props) => {
  const {touched, variable, answer, onPress} = props;
  return (
    <Animated.View
      entering={FadeInLeft.duration(800)}
      style={[
        styles.variable,
        touched
          ? variable === answer
            ? styles.variableCorrect
            : styles.variableIncorrect
          : null,
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Text label={variable} color={'white'} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = ScaledSheet.create({
  variable: {
    ...Theme.spacers.MT_4,
    ...Theme.spacers.PA_3,
    backgroundColor: Theme.colors.error,
    borderRadius: 10,
  },
  variableIncorrect: {
    borderWidth: 2,
    borderColor: 'red',
  },
  variableCorrect: {
    borderWidth: 2,
    borderColor: Theme.colors.correct,
  },
});

export default Answer;
