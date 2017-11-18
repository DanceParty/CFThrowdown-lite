import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// firebase actions
import { startSignout } from '../../actions/auth'

// components
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'


class MenuContainer extends React.Component {

  handleSignout = () => {
    startSignout()
  }

  render() {
    const admin = this.props.admin
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <Menu
          admin={admin}
          navigation={navigation}
          handleSignout={this.handleSignout}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MenuContainer