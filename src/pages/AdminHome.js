import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// firebase actions
import { startSignout } from '../actions/auth'

class AdminHome extends React.Component {

  handleSignout = () => {
    startSignout()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Button
            onPress={() => console.log('navigate to create new workout')}
            title="ADMIN"
            color="#841584"
            accessibilityLabel="Leaderboard Page"
          />
          <Button
            onPress={() => console.log('navigate to create new competitor')}
            title="ADMIN"
            color="#841584"
            accessibilityLabel="Workouts Page"
          />
        </View>
        <View style={styles.bottom}>
          <Text
            style={styles.link}
            onPress={this.handleSignout}
          >
            Logout
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  link: {
    color: 'purple',
  },
})

export default AdminHome