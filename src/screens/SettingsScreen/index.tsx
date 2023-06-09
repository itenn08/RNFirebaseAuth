import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';
import {useAuth} from '../../hooks/useAuth';
import styles from './styles';

const SettingsScreen = ({navigation}: any) => {
  const {isAuth, user} = useSelector((state: RootState) => state.user);
  const {logout} = useAuth();

  const toSignIn = () => {
    navigation.navigate('HomeStack');
  };

  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction color="#FFF" onPress={toSignIn} />
        <Appbar.Content title="Settings" color="#FFF" />
      </Appbar.Header>
      <View style={styles.container}>
        {user && (
          <Text
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            {user?.name || user?.email || user?.phoneNumber}
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
              textColor="#FFFF"
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
