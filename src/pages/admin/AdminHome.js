import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// firebase actions
import { startSignout } from '../../actions/auth'

class AdminHome extends React.Component {

  handleSignout = () => {
    startSignout()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Button
            onPress={() => this.props.navigation.navigate('AdminWorkouts')}
            title="Workouts"
            color="#841584"
            accessibilityLabel="Workouts Page"
          />
          <Button
            onPress={() => this.props.navigation.navigate('AdminCompetitors')}
            title="Competitors"
            color="#841584"
            accessibilityLabel="Competitor Page"
          />
          <Button
            onPress={() => this.props.navigation.navigate('AdminDivisions')}
            title="Divisions"
            color="#841584"
            accessibilityLabel="Division Page"
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