import React from 'react'
import { FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

// firebase
import { getWorkoutsByDivisionAndGender } from '../actions/workouts'

class AdminCompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.fullName}`
  })

  state = {
    workouts: undefined,
  }

  componentWillMount() {
    // get workouts to match data with scores
    const divisionFilter = this.props.navigation.state.params.competitor.division
    const genderFilter = this.props.navigation.state.params.competitor.gender
    getWorkoutsByDivisionAndGender(divisionFilter, genderFilter).then((workoutResult) => {
      this.setState({
        workouts: workoutResult
      })
    })
  }

  render() {
    const { competitor } = this.props.navigation.state.params
    if (this.state.workouts) {
      const scoresArray = []
      const index = 0
      this.state.workouts.map((workout) => {
        Object.keys(competitor.scores).forEach((key) => {
          if (workout.id === key) {
            scoresArray[index++] = { name: workout.name, score: competitor.scores[key] }
          }
        })
      })
      console.log('scoresArray:', scoresArray)
      return (
        <View>
          <Text><Text>NAME: </Text>{competitor.fullName}</Text>
          <Text><Text>GENDER: </Text>{competitor.gender}</Text>
          <Text><Text>DIVISION: </Text>{competitor.division}</Text>
          <Text>SCORES:
            {
              scoresArray.map((score, index) => {
                return (
                  <Text key={index}>{score.name} - {score.score}</Text>
                )
              })
            }
          </Text>
        </View>
      )
    } else {
      return null
    }
  }

}

export default AdminCompetitorDetails