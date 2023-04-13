import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

const SignUpPhoneScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <Appbar.Header
        style={{
          backgroundColor: '#44a4a5',
        }}>
        <Appbar.BackAction onPress={() => navigation.pop()} color="white" />
        <Appbar.Content title={'Sign up via phone'} color="#FFF" />
      </Appbar.Header>
      <View>
        <Text>Phone screen</Text>
      </View>
    </ScrollView>
  );
};

export default SignUpPhoneScreen;
