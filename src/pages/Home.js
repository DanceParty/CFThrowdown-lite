import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home