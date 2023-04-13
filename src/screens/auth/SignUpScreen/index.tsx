import React from 'react';
import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import googleIcon from '../../../assets/images/auth/google.png';
import appleIcon from '../../../assets/images/auth/apple.png';
import fbIcon from '../../../assets/images/auth/fb.png';
import {useAuth} from '../../../hooks/useAuth';
import logo from '../../../assets/images/LogoBlackEn.png';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content title={'Sign up'} color="#FFF" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <KeyboardAwareScrollView
          style={{flex: 1, width: '100%'}}
          keyboardShouldPersistTaps="always"
          scrollEnabled={true}>
          <View>
            <View style={styles.logoWrapper}>
              <Image source={logo} />
            </View>

            <Button
              icon="email"
              mode="outlined"
              style={styles.button}
              onPress={() => navigation.navigate('SignUpEmail')}>
              Sign up via email
            </Button>
            <Button
              icon="cellphone"
              mode="outlined"
              style={styles.button}
              onPress={() => console.log('Pressed')}>
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
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
