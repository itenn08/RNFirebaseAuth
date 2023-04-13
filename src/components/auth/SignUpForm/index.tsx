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

import googleIcon from '../../../assets/images/auth/google.png';
import appleIcon from '../../../assets/images/auth/apple.png';
import fbIcon from '../../../assets/images/auth/fb.png';
import logo from '../../../assets/images/LogoBlackEn.png';

import styles from './styles';
import {useAuth} from '../../../hooks/useAuth';

interface IProps {
  toSignIn: () => void;
}

const SignUpForm = ({toSignIn}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {signUpEmail, signUpSocial} = useAuth();

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

  const onGoogleAuth = async () => {
    signUpSocial('google');
  };

  const onAppleAuth = async () => {
    Alert.alert('Sorry, I skipped this step :)');
  };

  const onFbAuth = async () => {
    signUpSocial('facebook');
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
