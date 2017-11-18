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
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      headerTitle: 'Workouts',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  },
  WorkoutDetails: {
    screen: WorkoutDetails,
    navigationOptions: {
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      headerTitle: 'Leaderboard',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  },
  Competitors: {
    screen: Competitors,
    navigationOptions: {
      headerTitle: 'Competitors',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    }
  },
  CompetitorDetails: {
    screen: CompetitorDetails,
    navigationOptions: {
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
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
  AdminCompetitors: {
    screen: AdminCompetitors,
    navigationOptions: {
      headerTitle: 'Competitors - Admin',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AdminCompetitorDetails: {
    screen: AdminCompetitorDetails,
    navigationOptions: {
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AdminWorkouts: {
    screen: AdminWorkouts,
    navigationOptions: {
      headerTitle: 'Workouts - Admin',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AdminWorkoutDetails: {
    screen: AdminWorkoutDetails,
    navigationOptions: {
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AdminDivisions: {
    screen: AdminDivisions,
    navigationOptions: {
      headerTitle: 'Divisions - Admin',
      headerStyle: (Platform.OS === 'android') ? Constants.statusBarHeight : 0,
    },
  },
  AdminDivisionDetails: {
    screen: AdminDivisionDetails,
    navigationOptions: {
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