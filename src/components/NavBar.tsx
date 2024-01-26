import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserProfile from '../screens/UserProfile.tsx';

const Tab = createMaterialTopTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        options={{
          title: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'help'}
              color={'white'}
              size={35}
              style={{
                backgroundColor: '#b1b2b5',
                padding: 10,
                borderRadius: 30
              }}
            />
          )
        }}
        name="Help"
        component={UserProfile}
      />
      <Tab.Screen
        options={{
          title: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'map-marker-outline'}
              color={'white'}
              size={35}
              style={{
                backgroundColor: '#0077b6',
                padding: 10,
                borderRadius: 30
              }}
            />
          )
        }}
        name="Rides"
        component={UserProfile}
      />
      <Tab.Screen
        options={{
          title: ({ focused, color }) => (
            <View style={{ width: 120, height: 'auto', margin: 0, padding: 0 }}>
              <Image
                source={require('../../assets/logo.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 0,
                  margin: 0
                }}
              />
            </View>
          )
        }}
        name="Home"
        component={UserProfile}
      />
      <Tab.Screen
        options={{
          title: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'email-outline'}
              color={'white'}
              size={35}
              style={{
                backgroundColor: '#0096c7',
                padding: 10,
                borderRadius: 30
              }}
            />
          )
        }}
        name="Notis"
        component={UserProfile}
      />
      <Tab.Screen
        options={{
          title: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={'account-outline'}
              color={'white'}
              size={35}
              style={{
                backgroundColor: '#00b4d8',
                padding: 10,
                borderRadius: 30
              }}
            />
          )
        }}
        name="Profile"
        component={UserProfile}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});

export default NavBar;
