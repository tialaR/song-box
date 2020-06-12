import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import AlbumScreen from './pages/AlbumScreen';
import { HeaderImage, HeaderTitle } from './pages/AlbumScreen/styles';
import AlbumsScreen from './pages/AlbumsScreen';
import ArtistsScreen from './pages/ArtistsScreen';
import { colors } from './styles/colors';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <HeaderImage />
      <HeaderTitle>song box</HeaderTitle>
    </View>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.black,
          headerBackTitle: ' ',
          headerStyle: {
            elevation: 10,
            borderBottomWidth: 0,
            backgroundColor: colors.background,
            shadowColor: colors.shadow,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          },
          headerTitle: () => <LogoTitle />,
        }}>
        <Stack.Screen
          name="ArtistsScreen"
          options={{
            title: 'song box',
          }}
          component={ArtistsScreen}
        />
        <Stack.Screen
          name="AlbumsScreen"
          options={{
            title: 'song box',
          }}
          component={AlbumsScreen}
        />
        <Stack.Screen
          name="AlbumScreen"
          options={{
            title: 'song box',
          }}
          component={AlbumScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
