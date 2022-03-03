import React from 'react';
import {TextInput as TextInputP} from 'react-native-paper';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import {Theme} from '../../theme';
import {ScaledSheet} from 'react-native-size-matters';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
export interface Props extends Partial<TextInputProps> {
  label: TextInputLabelProp;
  value: string;
  error?: boolean;
  onBlur?: (
    txt: string | NativeSyntheticEvent<TextInputFocusEventData>,
  ) => void;
  onChangeText: (name: string) => void;
  disabled?: boolean;
}

const TextInput = (props: Props) => {
  const {label, disabled, value, error, onBlur, onChangeText} = props;
  return (
    <TextInputP
      label={label}
      mode="outlined"
      value={value}
      disabled={disabled}
      error={error}
      onBlur={onBlur}
      onChangeText={onChangeText}
      activeOutlineColor={Theme.colors.text}
      style={styles.textInput}
    />
  );
};

const styles = ScaledSheet.create({
  textInput: {
    ...Theme.spacers.MB_2,
  },
});

export default TextInput;
