import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// firebase actions
import { startSignout } from '../../actions/auth'

// components
import Menu from '../../components/Menu'


class MenuContainer extends React.Component {

  handleSignout = () => {
    startSignout()
  }

  render() {
    const admin = this.props.admin
    const navigation = this.props.navigation
    return (
      <Menu
        admin={admin}
        navigation={navigation}
        handleSignout={this.handleSignout}
      />
    )
  }
}

export default MenuContainer