import React from 'react'
import { Button, Text, View } from 'react-native'

import { getWorkouts, removeWorkout } from '../../actions/workouts'
import { removeDivision } from '../../actions/divisions'
import { getCompetitorsByDivision, updateCompetitor } from '../../actions/competitors'


class AdminDivisionDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.division
  })

  handleDivisionDelete = () => {
    const division = this.props.navigation.state.params.division
    // remove this division
    removeDivision(division)
    // get all workouts
    // TODO, switch this to only query workouts
    // with this division
    getWorkouts(division).then((res) => {
      if (res) {
        // check which workouts are matching the division
        let workoutIdArr = []
        let index = 0
        res.map((workout) => {
          if (workout.division === division) {
            workoutIdArr[index += 1] = workout.id
          }
        })
        // reset workouts
        workoutIdArr.map((id) => {
          removeWorkout(id)
        })
        // find all competitors that have division selected
        // remove division and scores

      } else {
        return false
      }
    })

    // get all competitors with this division
    // update each competitor removing scores, division, and totalScore
    getCompetitorsByDivision(division).then((res) => {
      if (res) {
        res.map((competitor) => {
          let updatedCompetitor = {
            firstName: competitor.firstName,
            lastName: competitor.lastName,
            division: null,
            female: competitor.female,
            male: competitor.male,
            scores: null,
            totalScore: null
          }
          updateCompetitor(competitor.id, updatedCompetitor)
        })
      } else {
        return false
      }
    })
  }

  render() {
    return (
      <View>
        <Button
          title="Delete this division?"
          onPress={() => this.handleDivisionDelete()}
        />
      </View>
    )
  }

}

export default AdminDivisionDetails