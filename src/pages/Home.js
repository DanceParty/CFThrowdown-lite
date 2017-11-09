import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Button
            onPress={() => this.props.navigation.navigate('Leaderboard')}
            title="Leaderboard"
            color="#841584"
            accessibilityLabel="Leaderboard Page"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Workouts')}
            title="Workouts"
            color="#841584"
            accessibilityLabel="Workouts Page"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Competitors')}
            title="Competitors"
            color="#841584"
            accessibilityLabel="Competitors Page"
          />
        </View>
        <View style={styles.bottom}>
          <Text>
            Admin?
            <Text
              style={styles.link}
              onPress={() => this.props.navigation.navigate('AdminLogin')}
            > Login here</Text>
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

export default Home