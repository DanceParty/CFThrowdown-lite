import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

import { getCompetitorByGenderAndDivision, updateCompetitorScores } from '../../actions/competitors'


class AdminWorkoutDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.workout.name,
  })

  state = {
    workout: this.props.navigation.state.params.workout
  }

  submitWorkoutScores = () => {
    // store state variables
    const workout = this.state.workout
    const division = workout.division
    let gender = 'Male'
    if (workout.female && workout.male) {
      gender = 'MaleFemale'
    } else if (workout.female && !workout.male) {
      gender = 'Female'
    }
    // get all competitors for this workouts gender & division
    getCompetitorByGenderAndDivision(division, gender).then((res) => {
      // iterate through each one with arr.sort, and compare the values
      // creating an ascending or descending sorted array based on the type
      // of workout
      const sortedCompetitors = res.sort((a, b) => {
        if (workout.type === 'Timed') {
          // this will sort by lowest score (i.e. Timed workouts)
          // find the matching workout score and store it
          let scoreA = 0
          a.scores.map((score) => {
            if (score.workoutId === workout.id) {
              scoreA = score.points
            }
          })
          // find the matching workout score and store it
          let scoreB = 0
          b.scores.map((score) => {
            if (score.workoutId === workout.id) {
              scoreB = score.points
            }
          })
          // if a < b, store a first (-1)
          // else b < a store b first (+1)
          if (scoreA < scoreB) {
            return -1
          } else {
            return 1
          }

        } else {
          // this will sort by greater value (i.e. points, weight...)
          let scoreA = 0
          a.scores.map((score) => {
            if (score.workoutId === workout.id) {
              scoreA = score.points
            }
          })
          // find the matching workout score and store it
          let scoreB = 0
          b.scores.map((score) => {
            if (score.workoutId === workout.id) {
              scoreB = score.points
            }
          })
          // if a < b, store a first (-1)
          // else b < a store b first (+1)
          if (scoreA > scoreB) {
            return -1
          } else {
            return 1
          }
        }
      })
      // iterate through the new array and update each competitor with the object
      sortedCompetitors.map((competitor, index) => {
        let competitorId = competitor.id
        const updateScores = competitor.scores.map((score) => {
          if ((score.workoutId === workout.id) && (score.points > 0)) {
            return {
              place: index+1,
              points: score.points,
              workoutId: score.workoutId,
            }
          } else {
            return score
          }
        })

        // update each competitor
        updateCompetitorScores(competitorId, updateScores)
      })
    })
    const resetNav = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'AdminHome' }),
        NavigationActions.navigate({ routeName: 'AdminWorkouts' })
      ]
    })
    this.props.navigation.dispatch(resetNav)
  }

  render() {
    const workout = this.state.workout
    if (workout) {
      let gender = 'Male'
      if (workout.female && workout.male) {
        gender = 'Male & Female'
      } else if (workout.female && !workout.male) {
        gender = 'Male'
      }
      return (
        <View>
          <Text><Text>DIVISION: </Text>{workout.division}</Text>
          <Text>
            <Text>GENDER: </Text>{gender}</Text>
          <Text><Text>SCORE TYPE: </Text>{workout.type}</Text>
          <View>
          {
            workout.steps.map((step, index) => {
              return (
                <Text key={index}>{step}</Text>
              )
            })
          }
          </View>
          <Button
            title="Submit Workout Scores"
            onPress={() => this.submitWorkoutScores()}
          />
        </View>
      )
    }
  }

}

export default AdminWorkoutDetails