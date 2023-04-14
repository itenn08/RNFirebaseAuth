import React, {useState} from 'react';
import {View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import styles from './styles';
import {useAuth} from '../../../hooks/useAuth';

const SignUpPhoneScreen = ({route, navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const params = route.params;

  const {signInPhoneNumber} = useAuth();

  const onSubmit = async () => {
    await signInPhoneNumber(phoneNumber);

    navigation.push('SignUpPhoneVerificationScreen');
  };

  return (
    <View style={styles.wrapper}>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content
          title={`${params?.isSignIn ? 'Sign in' : 'Sign up'} via Phone number`}
          color="#FFF"
        />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          onChangeText={phone => setPhoneNumber(phone.replace(/[^0-9]/g, ''))}
          value={phoneNumber}
          keyboardType="numeric"
        />
        <Button
          mode="text"
          onPress={() => phoneNumber && onSubmit()}
          textColor="white"
          style={[styles.button, !phoneNumber && styles.disabled]}>
          Send verification code
        </Button>
      </View>
    </View>
  );
};

export default SignUpPhoneScreen;
