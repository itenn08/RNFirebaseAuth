import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';

const SignInScreen = () => {
  const [showSignUp, setShowSignUp] = useState<boolean>(true);
  console.log('showSignUp :>> ', showSignUp);
  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.Content
          title={showSignUp ? 'Sign up' : 'Sign in'}
          color="#FFF"
        />
      </Appbar.Header>
      {showSignUp ? (
        <SignUpForm toSignIn={() => setShowSignUp(false)} />
      ) : (
        <SignInForm toSignUp={() => setShowSignUp(true)} />
      )}
    </ScrollView>
  );
};

export default SignInScreen;
