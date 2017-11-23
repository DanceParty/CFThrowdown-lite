import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// styles
import { container } from '../../styles/container'
import { typography } from '../../styles/typography'
import { padding } from '../../styles/padding'

// components
import PrimaryButton from '../Utility/PrimaryButton'


class Menu extends React.Component {

  handleSignout = () => {
    this.props.handleSignout()
  }

  handleWorkoutPress = () => {
    const admin = this.props.admin
    const navigation = this.props.navigation
    return admin ? navigation.navigate('AdminWorkouts') : navigation.navigate('Workouts')
  }

  handleCompetitorsPress = () => {
    const admin = this.props.admin
    const navigation = this.props.navigation
    return admin ? navigation.navigate('AdminCompetitors') : navigation.navigate('Competitors')
  }

  handleLeaderboardOrDivisionPress = () => {
    const admin = this.props.admin
    const navigation = this.props.navigation
    return admin ? navigation.navigate('AdminDivisions') : navigation.navigate('Leaderboard')
  }

  handleAboutPress = () => {
    const navigation = this.props.navigation
    return navigation.navigate('About')
  }

  render() {
    const admin = this.props.admin
    const navigation=this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <PrimaryButton
            text="Workouts"
            handleButtonPress={this.handleWorkoutPress}
          />
          <PrimaryButton
            text="Competitors"
            handleButtonPress={this.handleCompetitorsPress}
          />
          <PrimaryButton
            text={admin ? "Divisions" : "Leaderboard"}
            handleButtonPress={this.handleLeaderboardOrDivisionPress}
          />
          {
            !admin &&
            <PrimaryButton
              text="About"
              handleButtonPress={this.handleAboutPress}
            />
          }
        </View>
        <View style={[padding.mdPaddingBottom, styles.bottom]}>
          {
            admin ?
            <Text
              style={styles.link}
              onPress={this.handleSignout}
            >
              Logout
            </Text>
            :
            <Text style={typography.footnote}>Admin? <Text style={styles.link} onPress={() => navigation.navigate('AdminLogin')}>Login Here</Text>
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
    justifyContent: 'center',
  },
  middle: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    color: '#0D3E9C',
  },
})

export default Menu