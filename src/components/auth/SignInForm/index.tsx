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
  toSignUp: () => void;
  signInWithPhone: () => void;
}

const SignInForm = ({toSignUp, signInWithPhone}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signInEmail, signUpSocial} = useAuth();

  const onSuccessSignIn = () => {
    // TODO: Add something after sign up
    return;
  };

  async function signIn() {
    if (email === '' || password === '') {
      Alert.alert('Email and password are mandatory.');
      return;
    }

    if (password === '') {
      Alert.alert('Email and password are mandatory.');
      return;
    }

    const onSignInError = (e: string) => {
      Alert.alert(e);
      setPassword('');
    };

    signInEmail({email, password}, onSuccessSignIn, e => onSignInError(e));
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

            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
              <Text style={styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => signInWithPhone()}>
              <Text style={styles.buttonTitle}>Sign in with Phone</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={() => toSignUp()} style={styles.footerLink}>
                  Sign up
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

export default SignInForm;
