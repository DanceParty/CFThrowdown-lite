import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


class Menu extends React.Component {

  handleSignout = () => {
    this.props.handleSignout()
  }

  render() {
    const admin = this.props.admin
    const navigation=this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <Button
            onPress={() => admin ? navigation.navigate('AdminWorkouts') : navigation.navigate('Workouts')}
            title="Workouts"
            color="#841584"
            accessibilityLabel="Workouts Page"
          />
          <Button
            onPress={() => admin ? navigation.navigate('AdminCompetitors') : navigation.navigate('Competitors')}
            title="Competitors"
            color="#841584"
            accessibilityLabel="Competitor Page"
          />
          <Button
            onPress={() => admin ? navigation.navigate('AdminDivisions') : navigation.navigate('Leaderboard')}
            title={admin ? 'Divisions' : 'Leaderboard'}
            color="#841584"
            accessibilityLabel={admin ? 'Divisions' : 'Leaderboard'}
          />
        </View>
        <View style={styles.bottom}>
          {
            admin ?
            <Text
              style={styles.link}
              onPress={this.handleSignout}
            >
              Logout
            </Text>
            :
            <Text
              style={styles.link}
              onPress={this.handleSignout}
            >
              Login
            </Text>
          }
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

export default Menu