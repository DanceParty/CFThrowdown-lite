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
import NewWorkout from '../pages/NewWorkout'
import AddCompetitor from '../pages/AddCompetitor'
import AddDivision from '../pages/AddDivision'

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
      header: null,
    },
  },
  NewWorkout: {
    screen: NewWorkout,
    navigationOptions: {
      headerTitle: 'New Workout',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AddCompetitor: {
    screen: AddCompetitor,
    navigationOptions: {
      headerTitle: 'Add Competitor',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AddDivision: {
    screen: AddDivision,
    navigationOptions: {
      headerTitle: 'Add Division',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
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