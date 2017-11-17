import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// containers
import MenuContainer from '../../containers/MenuContainer'

class Home extends React.Component {
  render() {
    const admin = false
    const navigation = this.props.navigation
    return (
      <MenuContainer
        admin={admin}
        navigation={navigation}
      />
    )
  }
}

export default Home