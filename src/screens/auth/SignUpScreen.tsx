import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';

import SignUpForm from '../../components/auth/SignUpForm';

const SignUpScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content title={'Sign up'} color="#FFF" />
      </Appbar.Header>
      <SignUpForm toSignIn={() => navigation.navigate('SignInScreen')} />
    </ScrollView>
  );
};

export default SignUpScreen;
