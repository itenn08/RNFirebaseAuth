import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './styles';
import SignUpForm from '../../../components/auth/SignUpForm';

const SignUpEmailScreen = ({navigation}: any) => (
  <View style={{height: '100%'}}>
    <Appbar.Header
      style={{
        backgroundColor: '#44a4a5',
      }}>
      <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
      <Appbar.Content title={'Sign up via Email'} color="#FFF" />
    </Appbar.Header>
    <View style={styles.container}>
      <SignUpForm toSignIn={() => navigation.navigate('SignInScreen')} />
    </View>
  </View>
);

export default SignUpEmailScreen;
