import React from 'react'
import { Button, View } from 'react-native'

// actions
import { removeDivision } from '../../actions/divisions'
import { getWorkouts, removeWorkout } from '../../actions/workouts'
import { getCompetitorsByDivision, updateCompetitor } from '../../actions/competitors'

// components
import Division from '../../components/Division'


class DivisionDetailsContainer extends React.Component {

  handleDivisionDelete = () => {
    const division = this.props.division
    const navigation = this.props.navigation
    removeDivision(division)
    // get all workouts
    // TODO, switch this to only query workouts
    // with this division
    getWorkouts(division).then((res) => {
      if (res) {
        // check which workouts are matching the division
        let workoutIdArr = []
        let index = -1
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
      }
    })
    navigation.navigate('AdminHome')
  }

  render() {
    const admin = this.props.admin
    return (
      <Division
        admin={admin}
        handleDivisionDelete={this.handleDivisionDelete}
      />
    )
  }

}

export default DivisionDetailsContainer