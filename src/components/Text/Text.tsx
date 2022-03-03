import React, {useMemo} from 'react';
import {TextProps} from 'react-native';
import {Text as TextP} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import {FontSize} from '../../types';
import {Theme} from '../../theme';

export interface Props extends Partial<TextProps> {
  medium?: boolean;
  regular?: boolean;
  light?: boolean;
  size?: FontSize;
  color?: string;
  label: string;
  textAlignment?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}
const Text = (props: Props) => {
  const {label = 'Text', size = 'body', textAlignment = 'auto', color} = props;

  /* const FontWeight = useMemo(() => {
    if (medium) {
      return {fontWeight: '600'};
    }
    if (light) {
      return {fontWeight: '200'};
    }
    return {fontWeight: '400'};
  }, [light, medium]); */

  const textSizeStyle = useMemo(() => {
    return {fontSize: scale(Theme.fontsSize[size])};
  }, [size]);

  const textColorStyle = useMemo(() => {
    return {color: color || 'black'};
  }, [color]);

  const textAlignStyle = useMemo(() => {
    return {textAlign: textAlignment};
  }, [textAlignment]);

  return (
    <TextP {...props} style={[textAlignStyle, textSizeStyle, textColorStyle]}>
      {label}
    </TextP>
  );
};

export default Text;
