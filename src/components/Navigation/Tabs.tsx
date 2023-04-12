import * as React from 'react';
import {BottomTabNavigatorParamList} from './types';
import HomeStackNavigator from './HomeStack';
// import SignInScreen from '../../screens/SignInScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../../screens/SettingsScreen';
import SignInScreen from '../../screens/SignInScreen';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  const {isAuth} = useSelector((state: RootState) => state.user);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      inactiveColor="#8889ac"
      activeColor="#44a4a5"
      labeled={false}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeStack"
        component={isAuth ? HomeStackNavigator : SignInScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen name="SignIn" component={SignInScreen} /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <Icon name="gear" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
