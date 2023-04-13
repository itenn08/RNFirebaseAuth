import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from './types';
import SignInScreen from '../../screens/auth/SignInScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import SignUpEmail from '../../screens/auth/SignUpEmail';

const AuthStack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackVisible: true,
        headerBackButtonMenuEnabled: true,
        headerBackTitle: 'back',
        headerShown: false,
        navigationBarHidden: false,
      }}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="SignUpEmail" component={SignUpEmail} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
