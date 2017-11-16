import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

// actions
import { getCompetitorByGenderAndDivision, updateCompetitorScores } from '../../actions/competitors'

// utils
import { getGenderString } from '../../utils/competitors'

// components
import Workout from '../../components/Workout'


class AdminWorkoutDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.workout.name,
  })

  state = {
    workout: this.props.navigation.state.params.workout,
  }

  onSubmitWorkout = () => {
    // store state variables
    const workout = this.state.workout
    const division = workout.division
    const gender = getGenderString(workout.male, workout.female)
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
    const gender = getGenderString(workout.male, workout.female)
    if (workout && gender) {
      return (
        <View>
          <Workout
            workout={workout}
            gender={gender}
            admin={true}
            onSubmitWorkout={this.onSubmitWorkout}
          />
        </View>
      )
    } else {
      return null
    }
  }

}

export default AdminWorkoutDetails