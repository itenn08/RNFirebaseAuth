import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import SignInForm from '../../../components/auth/SignInForm';
import styles from './styles';

const SignInScreen = ({navigation}: any) => (
  <View style={styles.wrapper}>
    <Appbar.Header style={styles.header}>
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
  </View>
);

export default SignInScreen;
