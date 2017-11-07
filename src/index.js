import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './utils/router'

import { firebase } from './firebase/firebase'

export default class RootComponent extends React.Component {

  state = {
    user: null,
    isSignedIn: false,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('LOGGED IN')
        this.setState(() => ({ user: user, isSignedIn: true }))
      } else {
        console.log('LOGGED OUT')
        this.setState(() => ({ user: null, isSignedIn: false }))
      }
    })
  }

  render() {
    const user = this.state.user
    const isSignedIn = this.state.isSignedIn
    const NavComponent = RootNavigator(isSignedIn)
    return (
      <NavComponent screenProps={this.state.user} />
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
