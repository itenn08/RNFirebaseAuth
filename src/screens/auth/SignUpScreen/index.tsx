import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import googleIcon from '../../../assets/images/auth/google.png';
import appleIcon from '../../../assets/images/auth/apple.png';
import fbIcon from '../../../assets/images/auth/fb.png';
import {useAuth} from '../../../hooks/useAuth';
import logo from '../../../assets/images/LogoBlackEn.png';
import styles from './styles';

const SignUpScreen = ({navigation}: any) => {
  const {signUpSocial} = useAuth();

  const onGoogleAuth = () => {
    signUpSocial('google');
  };

  const onAppleAuth = () => {
    Alert.alert('Sorry, I skipped this step :)');
  };

  const onFbAuth = () => {
    signUpSocial('facebook');
  };

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content title={'Sign up'} color="#FFF" />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={logo} />
        </View>

        <Button
          icon="email"
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('SignUpEmailScreen')}>
          Sign up via email
        </Button>
        <Button
          icon="cellphone"
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('SignUpPhoneScreen')}>
          Sign up via phone number
        </Button>
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
      </View>
    </View>
  );
};

export default SignUpScreen;
