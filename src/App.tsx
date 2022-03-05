import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './navigation';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
