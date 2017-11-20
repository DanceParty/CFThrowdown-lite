import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './utils/router'

import { firebase } from './firebase/firebase'

export default class RootComponent extends React.Component {

  state = {
    user: null,
    isSignedIn: false,
  }

  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer']
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(() => ({ user: user, isSignedIn: true }))
      } else {
        this.setState(() => ({ user: null, isSignedIn: false }))
      }
    })
  }

  render() {
    const user = this.state.user
    const isSignedIn = this.state.isSignedIn
    const NavComponent = RootNavigator(isSignedIn)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavComponent screenProps={this.state.user} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})