import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import Workouts from '../pages/Workouts'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      headerTitle: 'Workouts'
    }
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      headerTitle: 'Leaderboard'
    }
  },
});

export default RootNavigator;