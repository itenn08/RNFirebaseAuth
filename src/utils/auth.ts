import auth from '@react-native-firebase/auth';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAuth, setUser} from '../store/reducers/user';
// import {axiosClient} from '../utils/axios';

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

// type SocialAuth = {
//   type: string;
//   token: string;
//   language: string;
// };

// type CheckAuth = {
//   user: any;
//   onSuccess?: () => void;
//   onFailed?: () => void;
//   notLogged?: () => void;
// };

export const useAuth = () => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(true);

  // const cookieService = new CookieService();

  // const signIn = async (
  //   user: UserAuth,
  //   onSuccess?: () => void,
  //   onError?: (e: any) => void,
  // ) => {
  //   try {
  //     const {data} = await AuthClient.signIn(user);
  //     if (data?.token.access_token) {
  //       cookieService.setToken(data?.token.access_token);
  //       axiosClient.defaults.headers.common.Authorization = `Bearer ${data?.token.access_token}`;
  //       dispatch(setAuth(true));

  //       await getProfile();
  //       if (onSuccess) {
  //         onSuccess();
  //       }
  //       return data?.data;
  //     }
  //   } catch (e) {
  //     dispatch(setAuth(false));

  //     if (onError) {
  //       onError(e);
  //     }
  //     return false;
  //   }
  // };

  const signUpEmail = async (
    user: UserSignUpAuth,
    onSuccess?: () => void,
    onError?: (e: any) => void,
  ) => {
    try {
      // const data = await auth()
      //   .createUserWithEmailAndPassword(user.email, user.password)
      //   .then(() => {
      //     console.log('User account created & signed in!');
      //   })
      //   .catch(error => {
      //     if (error.code === 'auth/email-already-in-use') {
      //       console.log('That email address is already in use!');
      //     }

      //     if (error.code === 'auth/invalid-email') {
      //       console.log('That email address is invalid!');
      //     }

      //     console.error(error);
      //   });
      console.log('user from AUTH', user);
      const data = await auth().createUserWithEmailAndPassword(
        user.email,
        user.password,
      );
      // const data = null;

      console.log('data :>> ', data);
      if (data) {
        // cookieService.setToken(data?.token.access_token);
        // axiosClient.defaults.headers.common.Authorization = `Bearer ${data?.token.access_token}`;
        dispatch(setAuth(true));

        // await getProfile();

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
          console.log('e?.code', e?.code);
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

  // const checkAuth = async ({
  //   user,
  //   onSuccess,
  //   onFailed,
  //   notLogged,
  // }: CheckAuth) => {
  //   if (!cookieService.getToken() && !user?.isAuth) {
  //     if (notLogged) {
  //       notLogged();
  //     }
  //     return;
  //   }

  //   if (user?.isAuth) {
  //     if (onSuccess) {
  //       onSuccess();
  //     }
  //     return;
  //   }

  //   if (cookieService.getToken()) {
  //     const profile = await getProfile(onSuccess);
  //     if (profile) {
  //       if (onSuccess) {
  //         onSuccess();
  //       }
  //       return;
  //     }
  //   }

  //   if (onFailed) {
  //     onFailed();
  //   }
  // };

  // const getProfile = async (cb?: () => void) => {
  //   try {
  //     setLoading(true);
  //     const profile = await UserService.getProfile();
  //     dispatch(setUser(profile?.data));
  //     dispatch(setAuth(true));

  //     if (cb) {
  //       cb();
  //     }

  //     setLoading(false);
  //     return true;
  //   } catch (e) {
  //     dispatch(setAuth(false));
  //     setLoading(false);
  //     logout();
  //   }
  // };

  const logout = async () => {
    // const data = await auth().signOut();
    // console.log('data :>> ', data);
    dispatch(setUser(null));
    dispatch(setAuth(false));
    setLoading(false);
  };

  return {
    // signIn,
    // signUp,
    logout,
    // signUpSocial,
    // updateProfile,
    // getProfile,
    // checkAuth,
    // forgotPassword,
    signUpEmail,

    isLoading,
    setLoading,
  };
};
