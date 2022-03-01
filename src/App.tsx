import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigation';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </PaperProvider>
  );
};

AppRegistry.registerComponent('ChildrensBook', () => App);

export default App;
