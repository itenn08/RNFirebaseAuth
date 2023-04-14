import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAuth, setPhoneConfirmation, setUser} from '../store/reducers/user';

export type UserAuth = {
  email: string;
  password: string;
};

export type UserSignUpAuth = {
  email: string;
  password: string;
  gender?: string;
  birth_date?: string;
  avatar_id?: string;
  name?: string;
  full_name?: string;
  name_type?: string;
  currency?: string;
};

export type UserProfileUpdate = {
  currency?: string;
  gender?: string;
  avatar_id?: string;
};

export const useAuth = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(true);

  const signUpEmail = async (
    user: UserSignUpAuth,
    onSuccess?: () => void,
    onError?: (e: any) => void,
  ) => {
    try {
      const data = await auth().createUserWithEmailAndPassword(
        user.email,
        user.password,
      );

      if (data) {
        dispatch(setAuth(true));

        if (onSuccess) {
          onSuccess();
          return;
        }
      }
    } catch (e: any) {
      dispatch(setAuth(false));
      if (onError) {
        let error = '';
        if (e) {
          if (e?.code === 'auth/email-already-in-use') {
            error = 'That email address is already in use!';
          }

          if (e?.code === 'auth/invalid-email') {
            error = 'That email address is invalid!';
          }
          onError(error);
        }
      }
    }
  };

  const signInEmail = async (
    user: UserSignUpAuth,
    onSuccess?: () => void,
    onError?: (e: any) => void,
  ) => {
    try {
      const data = await auth().signInWithEmailAndPassword(
        user.email,
        user.password,
      );

      if (data) {
        dispatch(setAuth(true));

        if (onSuccess) {
          onSuccess();
          return;
        }
      }
    } catch (e: any) {
      dispatch(setAuth(false));
      if (onError) {
        let error = '';
        if (e) {
          if (e?.code === 'auth/email-already-in-use') {
            error = 'That email address is already in use!';
          } else if (e?.code === 'auth/invalid-email') {
            error = 'That email address is invalid!';
          } else if (e?.code === 'auth/wrong-password') {
            error = 'Email or password is wrong!';
          } else {
            error = 'Something went wrong, try again!';
          }
          onError(error);
        }
      }
    }
  };

  const signUpSocial = async (
    type: 'google' | 'facebook' | 'apple',
    onSuccess?: () => void,
    onError?: (e: any) => void,
  ) => {
    try {
      let credentials;

      if (type === 'google') {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        // Get the users ID token
        const {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        credentials = auth.GoogleAuthProvider.credential(idToken);
      }

      if (type === 'facebook') {
        const result = await LoginManager.logInWithPermissions([
          'public_profile',
          'email',
        ]);

        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
          throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        credentials = auth.FacebookAuthProvider.credential(data.accessToken);
      }

      if (type === 'apple') {
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
          throw new Error('Apple Sign-In failed - no identify token returned');
        }

        // Create a Firebase credential from the response
        const {identityToken, nonce} = appleAuthRequestResponse;
        credentials = auth.AppleAuthProvider.credential(identityToken, nonce);
      }

      if (credentials) {
        const data = await auth().signInWithCredential(credentials);
        if (data) {
          dispatch(setAuth(true));

          if (onSuccess) {
            onSuccess();
            return;
          }
          return;
        }
      }

      if (onError) {
        onError('Something went wrong');
      }
    } catch (e: any) {
      dispatch(setAuth(false));
      if (onError) {
        onError('Something went wrong');
      }
    }
  };

  const signInPhoneNumber = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+${phoneNumber}`,
      );

      dispatch(setPhoneConfirmation(confirmation));
    } catch (e: any) {
      dispatch(setPhoneConfirmation(null));
    }
  };

  const logout = () => {
    dispatch(setUser(null));
    dispatch(setAuth(false));
    setLoading(false);
  };

  return {
    logout,
    signUpSocial,
    signUpEmail,
    signInEmail,
    signInPhoneNumber,
    isLoading,
    setLoading,
  };
};
