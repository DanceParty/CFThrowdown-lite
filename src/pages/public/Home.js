import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// containers
import MenuContainer from '../../containers/MenuContainer'

class Home extends React.Component {
  render() {
    const admin = false
    const navigation = this.props.navigation
    return (
      <View style={styles.page}>
        <MenuContainer
          admin={admin}
          navigation={navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  }
})

export default Home