import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
  History,
  Pilotage,
  Assist,
  Weather,
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen
        name="Pro"
        component={Pro}
        options={screenOptions.components}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={screenOptions.components}
      />
      <Stack.Screen
        name="Pilotage"
        component={Pilotage}
        options={screenOptions.components}
      />
      <Stack.Screen
        name="Assist"
        component={Assist}
        options={screenOptions.components}
      />
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
