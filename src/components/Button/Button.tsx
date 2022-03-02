import React from 'react';
import {Button as ButtonP} from 'react-native-paper';
import {Theme} from '../../theme';
import Text, {TextProps} from '../Text';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  textProps?: Partial<TextProps>;
}

const Button = (props: Props) => {
  const {label, onPress, disabled, textProps} = props;
  return (
    <ButtonP
      mode="contained"
      onPress={onPress}
      disabled={disabled}
      color={Theme.colors.text}>
      <Text {...textProps} label={label} />
    </ButtonP>
  );
};

export default Button;
