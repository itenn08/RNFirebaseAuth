import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from './types';
import SignInScreen from '../../screens/auth/SignInScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import SignUpEmailScreen from '../../screens/auth/SignUpEmailScreen';
import SignUpPhoneScreen from '../../screens/auth/SignUpPhoneScreen';
import SignUpPhoneVerificationScreen from '../../screens/auth/SignUpPhoneVerificationScreen';

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
      <AuthStack.Screen
        name="SignUpEmailScreen"
        component={SignUpEmailScreen}
      />
      <AuthStack.Screen
        name="SignUpPhoneScreen"
        component={SignUpPhoneScreen}
      />
      <AuthStack.Screen
        name="SignUpPhoneVerificationScreen"
        component={SignUpPhoneVerificationScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
