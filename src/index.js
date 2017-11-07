import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './utils/router'

export default class RootComponent extends React.Component {

  state = {
    user: null,
    text: 'Text'
  }

  render() {
    const user = this.state.user
    const NavComponent = RootNavigator(user)
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
