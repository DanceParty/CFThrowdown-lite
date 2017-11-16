import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

// actions
import { getCompetitorByGenderAndDivision, updateCompetitorScores } from '../../actions/competitors'

// utils
import { getGenderString } from '../../utils/competitors'
import { sortByPoints } from '../../utils/scores'

// components
import Workout from '../../components/Workout'


class WorkoutDetailsContainer extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: this.props.workout.name,
  })

  onSubmitWorkout = () => {
    // store state variables
    const workout = this.props.workout
    const division = this.props.workout.division
    const gender = getGenderString(workout.male, workout.female)
    const type = this.props.workout.type
    // get all competitors for this workouts gender & division
    getCompetitorByGenderAndDivision(division, gender).then((res) => {
      if (res) {
        const sortedCompetitors = sortByPoints(type, workout, res)
        // iterate through the new array and update each competitor with the object
        sortedCompetitors.map((competitor, index) => {
          const competitorId = competitor.id
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
      } else {
        return false
      }
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
    const workout = this.props.workout
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

export default WorkoutDetailsContainer