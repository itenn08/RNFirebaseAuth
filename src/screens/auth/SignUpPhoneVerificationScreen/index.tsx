import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {setPhoneConfirmation} from '../../../store/reducers/user';
import {useAuth} from '../../../hooks/useAuth';

const SignUpPhoneScreen = ({navigation}: any) => {
  const {phoneConfirmation} = useSelector((state: RootState) => state.user);
  const [verificationCode, setVerificationCode] = useState('');

  const {verificationCodePhoneNumber} = useAuth();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      await verificationCodePhoneNumber(phoneConfirmation, verificationCode);
    } catch (error) {
      Alert.alert('Invalid code.');
      dispatch(setPhoneConfirmation(null));
      navigation.pop();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content title={'Verification phone number'} color="#FFF" />
      </Appbar.Header>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              placeholder="Verification code"
              placeholderTextColor="#aaaaaa"
              onChangeText={phone => setVerificationCode(phone)}
              value={verificationCode}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <Button
              mode="text"
              onPress={() => verificationCode && onSubmit()}
              textColor="white"
              style={[styles.button, !verificationCode && styles.disabled]}>
              Apply
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpPhoneScreen;
