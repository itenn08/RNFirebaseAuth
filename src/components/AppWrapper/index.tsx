import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {setAuth, setUser} from '../../store/reducers/user';
import {View} from 'react-native';
import {Portal} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Settings} from 'react-native-fbsdk-next';

const AppWrapper = ({children}: any) => {
  const [initializing, setInitializing] = useState(true);

  const dispatch = useDispatch();

  function onAuthStateChanged(user: any) {
    if (user) {
      dispatch(setUser(user));
      dispatch(setAuth(true));
      if (initializing) setInitializing(false);
      return;
    }

    setUser(null);
    dispatch(setAuth(false));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    Settings.setAppID('238333602020443');
    Settings.initializeSDK();

    GoogleSignin.configure({
      webClientId:
        '348540234124-fg2gmjcvgrfp7ba70n5l76t39m2sj5ve.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <View>
      <Portal>{children}</Portal>
    </View>
  );
};

export default AppWrapper;
