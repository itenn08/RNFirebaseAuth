import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackNavigatorParamList} from './types';
import HomeScreen from '../../screens/HomeScreen';
import SignInScreen from '../../screens/SignInScreen';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Details" component={SignInScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
