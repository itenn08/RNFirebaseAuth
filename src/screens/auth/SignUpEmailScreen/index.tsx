import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './styles';
import SignUpForm from '../../../components/auth/SignUpForm';

const SignUpEmailScreen = ({navigation}: any) => (
  <View style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
      <Appbar.Content title={'Sign up via Email'} color="#FFF" />
    </Appbar.Header>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <SignUpForm toSignIn={() => navigation.navigate('SignInScreen')} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </View>
);

export default SignUpEmailScreen;
