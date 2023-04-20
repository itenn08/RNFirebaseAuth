import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setAuth, setUser} from '../../store/reducers/user';
import {View} from 'react-native';
import {Portal} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';
import {MMKV} from 'react-native-mmkv';
import {axiosClient} from '../../utils/axios';

export const localStorage = new MMKV();

const AppWrapper = ({children}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    Settings.setAppID('238333602020443');
    Settings.initializeSDK();

    GoogleSignin.configure({
      webClientId:
        '348540234124-fg2gmjcvgrfp7ba70n5l76t39m2sj5ve.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getString('token');
    const getProfile = async () => {
      const {data: profile} = await axiosClient.get('/user/profile');
      dispatch(setAuth(true));
      dispatch(setUser(profile));
    };

    if (token) {
      getProfile();
    }
  }, []);

  return (
    <View>
      <Portal>{children}</Portal>
    </View>
  );
};

export default AppWrapper;
