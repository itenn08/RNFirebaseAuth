import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import {useAuth} from '../../../utils/auth';
import googleIcon from '../../../assets/images/auth/google.png';
import appleIcon from '../../../assets/images/auth/apple.png';
import fbIcon from '../../../assets/images/auth/fb.png';
import logo from '../../../assets/images/LogoBlackEn.png';

import styles from './styles';
// import {
//   onAppleButtonPress,
//   onFacebookButtonPress,
//   onGoogleButtonPress,
// } from '../../../utils/socialAuth';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
} from '../../../utils/socialAuth';
interface IProps {
  toSignIn: () => void;
}

const SignUpForm = ({toSignIn}: IProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {signUpEmail} = useAuth();

  const onSuccessSignUp = () => {
    console.log('goood');
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

    signUpEmail({email, password}, onSuccessSignUp, e => Alert.alert(e));
  }

  const onGoogleAuth = async () => {
    console.log('1111', 1111);
    await onGoogleButtonPress();
    console.log('test :>> ');
  };

  const onAppleAuth = async () => {
    console.log('1111', 1111);
    // await onAppleButtonPress();
    console.log('test :>> ');
  };

  const onFbAuth = async () => {
    console.log('1111', 1111);
    await onFacebookButtonPress();
    console.log('test :>> ');
  };

  return (
    <View>
      <ScrollView>
        <KeyboardAwareScrollView
          style={{flex: 1, width: '100%'}}
          keyboardShouldPersistTaps="always"
          scrollEnabled={true}>
          <View>
            <View style={styles.logoWrapper}>
              <Image source={logo} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#aaaaaa"
              onChangeText={text => setFullName(text)}
              value={fullName}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
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
          </View>

          <View style={styles.socialWrapper}>
            <TouchableOpacity
              style={[styles.socialBtn, styles.fb]}
              onPress={onFbAuth}>
              <Image source={fbIcon} style={styles.socialFbBtnIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialBtn, styles.google]}
              onPress={onGoogleAuth}>
              <Image source={googleIcon} style={styles.socialBtnIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialBtn, styles.apple]}
              onPress={onAppleAuth}>
              <Image source={appleIcon} style={styles.socialBtnIcon} />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default SignUpForm;
