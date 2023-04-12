import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import {useAuth} from '../utils/auth';

const SettingsScreen = ({navigation}: any) => {
  const {isAuth, user} = useSelector((state: RootState) => state.user);
  const {logout} = useAuth();
  console.log('user :>> ', user);

  const toSignIn = () => {
    navigation.navigate('HomeStack');
  };

  // const goBack = () => {
  //   navigation.navigate('HomeStack');
  // };

  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction color="#FFF" onPress={toSignIn} />
        <Appbar.Content title="Settings" color="#FFF" />
      </Appbar.Header>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 100,
        }}>
        {user && (
          <Text
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            UserName
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          {isAuth ? (
            <Button
              onPress={() => logout()}
              mode="outlined"
              style={{display: 'flex', justifyContent: 'center'}}
              buttonColor="#44a4a5">
              Log out
            </Button>
          ) : (
            <Button
              onPress={() => toSignIn()}
              mode="outlined"
              style={{width: '50%'}}
              buttonColor="#44a4a5"
              textColor="#FFFF">
              Sign in
            </Button>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
