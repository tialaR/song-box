import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './src/routes';
import { colors } from './src/styles/colors';

const statusBarHeight = getStatusBarHeight(true);

console.disableYellowBox = true;

Icon.loadFont();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      {Platform.OS !== 'android' && (
        <View
          style={{
            height: statusBarHeight,
            backgroundColor: colors.black,
            width: '100%',
          }}
        />
      )}
      <Routes />
    </>
  );
};

export default App;
