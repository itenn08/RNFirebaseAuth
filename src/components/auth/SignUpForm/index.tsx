import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import {useAuth} from '../../../hooks/useAuth';

interface IProps {
  toSignIn: () => void;
}

const SignUpForm = ({toSignIn}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {signUpEmail} = useAuth();

  const onSuccessSignUp = () => {
    // TODO: Add something after sign up
    return;
  };

  async function signUp() {
    if (email === '' || password === '') {
      Alert.alert('Email and password are mandatory.');
      return;
    }
    if (password === '') {
      Alert.alert('Email and password are mandatory.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Confirm password is wrong.');
      return;
    }

    signUpEmail({email, password}, onSuccessSignUp, e => Alert.alert(e));
  }

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={text => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => signUp()}>
        <Text style={styles.buttonTitle}>Create account</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Already got an account?{' '}
          <Text onPress={() => toSignIn()} style={styles.footerLink}>
            Log in
          </Text>
        </Text>
      </View>
    </>
  );
};

export default SignUpForm;
