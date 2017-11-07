import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import fire from './firebase/firebase'

import RootNavigator from './utils/router'

export default class RootComponent extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
