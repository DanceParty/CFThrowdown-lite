import React from 'react';
import { Platform, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo'

// public pages
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import Workouts from '../pages/Workouts'
import AdminLogin from '../pages/AdminLogin'

// private pages
import AdminHome from '../pages/AdminHome'

const PublicNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      headerTitle: 'Workouts',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      headerTitle: 'Leaderboard',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  },
  AdminLogin: {
    screen: AdminLogin,
    navigationOptions: {
      headerTitle: 'Admin Login',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  }
});

const AdminNavigator = StackNavigator({
  AdminHome: {
    screen: AdminHome,
    navigationOptions: {
      header: null
    }
  }
})

const RootNavigator = (signedIn = false) => {
  return StackNavigator({
    PublicNavigator: {
      screen: PublicNavigator,
      navigationOptions: {
        gesturesEnabled: false,
        header: null
      },
    },
    AdminNavigator: {
      screen: AdminNavigator,
      navigationOptions: {
        gesturesEnabled: false,
        header: null
      },
    },
  }, {
    initialRouteName: signedIn ? 'AdminNavigator' : 'PublicNavigator'
  })
}

export default RootNavigator;