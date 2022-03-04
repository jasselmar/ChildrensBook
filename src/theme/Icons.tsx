import React from 'react';
import {Avatar} from 'react-native-paper';

export const BookOutline = () => (
  <Avatar.Icon
    size={40}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="book-open-page-variant-outline"
  />
);

export const BookFilled = () => (
  <Avatar.Icon
    size={40}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="book-open-page-variant"
  />
);

export const GameOutline = () => (
  <Avatar.Icon
    size={45}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="gamepad-square-outline"
  />
);

export const GameFilled = () => (
  <Avatar.Icon
    size={45}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="gamepad-square"
  />
);
