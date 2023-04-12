import React from 'react';
import {Text, View} from 'react-native';

interface IProps {
  toSignUp: () => void;
}

const SignInForm = ({toSignUp}: IProps) => {
  return (
    <View>
      <Text>SignIn Screen</Text>
      <Text onPress={() => toSignUp()}>to SignUp</Text>
    </View>
  );
};

export default SignInForm;
