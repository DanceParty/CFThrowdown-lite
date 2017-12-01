import React from 'react'
import { Alert, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation'

// actions
import { getCompetitorByGenderAndDivision, updateCompetitorScores, updateCompetitorTotalScore } from '../../actions/competitors'
import { getDivisionWorkouts, updateDivisionWorkouts } from '../../actions/divisions'
import { removeWorkout } from '../../actions/workouts'

// utils
import { getGenderString } from '../../utils/competitors'
import { sortByPoints } from '../../utils/scores'

// components
import Workout from '../../components/Workout/Workout'


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
        // sort the competitors by points based on this workout
        const sortedCompetitors = sortByPoints(type, workout, res)
        // iterate through the new array and update each competitor with the object
        sortedCompetitors.map((competitor, index) => {
          const competitorId = competitor.id
          let totalScore = 0
          const updateScores = competitor.scores.map((score) => {
            // for each score, add the placing to the totalScore
            if ((score.workoutId === workout.id) && (score.points > 0)) {
              totalScore += (index+1)
              return {
                place: index+1,
                points: score.points,
                workoutId: score.workoutId,
              }
            } else {
              totalScore += (score.place || 0)
              return score
            }
          })

          // update each competitor
          updateCompetitorScores(competitorId, updateScores)
          updateCompetitorTotalScore(competitorId, totalScore)
        })
      }
    })
    Alert.alert("Workout scores have been submitted")
    const resetNav = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'AdminHome' }),
        NavigationActions.navigate({ routeName: 'AdminWorkouts' })
      ]
    })
    this.props.navigation.dispatch(resetNav)
  }

  handleRemoveWorkout = () => {
    const workout = this.props.workout
    const division = this.props.workout.division
    const gender = getGenderString(workout.male, workout.female)
    // remove all references to this workout in competitors
    getCompetitorByGenderAndDivision(division, gender).then((res) => {
      if (res) {
        const competitorArr = res
        competitorArr.map((competitor) => {
          const newScores = competitor.scores.filter((score) => {
            return score.workoutId !== workout.id
          })
          updateCompetitorScores(competitor.id, newScores)
        })
      } else {
        return false
      }
    })

    // remove all references to this workout in divisions
    getDivisionWorkouts(division).then((res) => {
      if (res) {
        const workoutArr = res
        filteredWorkouts = workoutArr.filter((workoutId) => {
          return workoutId !== workout.id
        })
        updateDivisionWorkouts(filteredWorkouts, division)
      }
    })

    // remove this workout
    removeWorkout(workout.id).then(() => {
      Alert.alert(`${workout.name} has been removed`, 'This automatically removes it from all divisions and competitors as well.')
      const resetNav = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'AdminHome' }),
          NavigationActions.navigate({ routeName: 'AdminWorkouts' })
        ]
      })
      this.props.navigation.dispatch(resetNav)
    })

  }

  render() {
    const workout = this.props.workout
    const gender = getGenderString(workout.male, workout.female)
    const admin = this.props.admin
    if (workout && gender) {
      return (
        <ScrollView>
          <Workout
            workout={workout}
            gender={gender}
            admin={admin}
            onSubmitWorkout={this.onSubmitWorkout}
            handleRemoveWorkout={this.handleRemoveWorkout}
          />
        </ScrollView>
      )
    } else {
      return null
    }
  }

}

export default WorkoutDetailsContainer