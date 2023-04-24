import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import Twilio from '../../components/Twilio';
import styles from './styles';

const HomeScreen = () => (
  <View style={styles.wrapper}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={'Home'} color="#FFF" />
    </Appbar.Header>
    <Twilio />
  </View>
);

export default HomeScreen;
