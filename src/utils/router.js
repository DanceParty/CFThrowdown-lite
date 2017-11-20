import React from 'react';
import { Platform, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo'

// public pages
import Home from '../pages/public/Home'
import Leaderboard from '../pages/public/Leaderboard'
import Workouts from '../pages/public/Workouts'
import Competitors from '../pages/public/Competitors'
import AdminLogin from '../pages/public/AdminLogin'
import WorkoutDetails from '../pages/public/WorkoutDetails'
import CompetitorDetails from '../pages/public/CompetitorDetails'
import About from '../pages/public/About'

// private pages
import AdminHome from '../pages/admin/AdminHome'
import NewWorkout from '../pages/admin/NewWorkout'
import AddCompetitor from '../pages/admin/AddCompetitor'
import AddDivision from '../pages/admin/AddDivision'
import AdminCompetitors from '../pages/admin/AdminCompetitors'
import AdminWorkouts from '../pages/admin/AdminWorkouts'
import AdminDivisions from '../pages/admin/AdminDivisions'
import AdminCompetitorDetails from '../pages/admin/AdminCompetitorDetails'
import AdminWorkoutDetails from '../pages/admin/AdminWorkoutDetails'
import AdminDivisionDetails from '../pages/admin/AdminDivisionDetails'

const PublicNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: 'About',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      headerTitle: 'Workouts',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    }
  },
  WorkoutDetails: {
    screen: WorkoutDetails,
    navigationOptions: {
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      headerTitle: 'Leaderboard',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    }
  },
  Competitors: {
    screen: Competitors,
    navigationOptions: {
      headerTitle: 'Competitors',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    }
  },
  CompetitorDetails: {
    screen: CompetitorDetails,
    navigationOptions: {
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminLogin: {
    screen: AdminLogin,
    navigationOptions: {
      headerTitle: 'Admin Login',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
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
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AddCompetitor: {
    screen: AddCompetitor,
    navigationOptions: {
      headerTitle: 'Add Competitor',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AddDivision: {
    screen: AddDivision,
    navigationOptions: {
      headerTitle: 'Add Division',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminCompetitors: {
    screen: AdminCompetitors,
    navigationOptions: {
      headerTitle: 'Competitors - Admin',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminCompetitorDetails: {
    screen: AdminCompetitorDetails,
    navigationOptions: {
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminWorkouts: {
    screen: AdminWorkouts,
    navigationOptions: {
      headerTitle: 'Workouts - Admin',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminWorkoutDetails: {
    screen: AdminWorkoutDetails,
    navigationOptions: {
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminDivisions: {
    screen: AdminDivisions,
    navigationOptions: {
      headerTitle: 'Divisions - Admin',
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
    },
  },
  AdminDivisionDetails: {
    screen: AdminDivisionDetails,
    navigationOptions: {
      headerTitleStyle: { color: 'white' },
      headerBackTitleStyle: { color: 'white' },
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#424244', marginTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0 },
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