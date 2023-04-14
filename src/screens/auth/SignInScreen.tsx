import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import SignInForm from '../../components/auth/SignInForm';

const SignInScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.Content title={'Sign in'} color="#FFF" />
      </Appbar.Header>
      <SignInForm
        toSignUp={() => navigation.push('SignUpScreen')}
        signInWithPhone={() =>
          navigation.push('SignUpPhoneScreen', {
            isSignIn: true,
          })
        }
      />
    </ScrollView>
  );
};

export default SignInScreen;
