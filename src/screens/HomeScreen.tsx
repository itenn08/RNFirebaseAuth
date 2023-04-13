import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';

const HomeScreen = () => (
  <ScrollView>
    <Appbar.Header
      style={{
        backgroundColor: '#44a4a5',
      }}>
      <Appbar.Content title={'Home'} color="#FFF" />
    </Appbar.Header>
    <Text>Home screen</Text>
  </ScrollView>
);

export default HomeScreen;
