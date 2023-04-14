import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './styles';

const HomeScreen = () => (
  <View style={styles.wrapper}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={'Home'} color="#FFF" />
    </Appbar.Header>
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  </View>
);

export default HomeScreen;
