import React from 'react'
import { Button, ScrollView } from 'react-native'

// firebase
import { getWorkouts } from '../../actions/workouts'
import { allDivisions } from '../../actions/divisions'

// components
import WorkoutList from '../../components/WorkoutList'
import WorkoutFilter from '../../components/WorkoutFilter'


class WorkoutContainer extends React.Component {

  state = {
    workouts: undefined,
    filteredWorkouts: undefined,
    divisions: undefined,
    currentGender: undefined,
    currentDivision: undefined,
  }

  componentWillMount() {
    // default filter is RX Males
    getWorkouts().then((res) => {
      const defaultFilteredWorkouts = res.filter((workout) => {
          return (workout.male) && (workout.division === 'RX')
      })
      this.setState({
        filteredWorkouts: defaultFilteredWorkouts,
        workouts: res,
        currentGender: 'Male',
        currentDivision: 'RX',
      })
    })

    allDivisions().then((divisionsResult) => {
      const divisionList = Object.keys(divisionsResult)
      this.setState({
        divisions: divisionList,
      })

    })
  }

  handleGenderFilter = (gender) => {
    const workouts = this.state.workouts
    const currentDivision = this.state.currentDivision
    const filteredWorkouts = workouts.filter((workout) => {
      if (gender === 'Male') {
        return workout.male && (workout.division === currentDivision)
      } else if (gender === 'Female') {
        return workout.female && (workout.division === currentDivision)
      }
    })

    this.setState({
      filteredWorkouts: filteredWorkouts,
      currentGender: gender,
    })
  }

  handleDivisionFilter = (division) => {
    const gender = this.state.currentGender
    const filteredWorkouts = this.state.workouts.filter((workout) => {
      if (gender === 'Female') {
        return (workout.female) && (workout.division === division)
      } else if (gender === 'Male') {
        return (workout.male) && (workout.division === division)
      } else {
        return false
      }
    })

    this.setState({
      currentDivision: division,
      filteredWorkouts: filteredWorkouts,
    })
  }

  render() {
    const workouts = this.state.filteredWorkouts
    const divisions = this.state.divisions
    const gender = this.state.currentGender
    const currDivision = this.state.currentDivision
    const admin = this.props.admin
    const navigation = this.props.navigation
    if (workouts && divisions) {
      return (
        <ScrollView>
          <WorkoutFilter
            gender={gender}
            divisions={divisions}
            selectedDivision={currDivision}
            handleGenderFilter={this.handleGenderFilter}
            handleDivisionFilter={this.handleDivisionFilter}
          />

          <WorkoutList
            navigation={navigation}
            filteredWorkouts={workouts}
            admin={admin}
          />
        </ScrollView>
      )
    } else if ((!workouts || !divisions) && admin) {
      return (
        <Button
          title="Add Workout"
          onPress={() => this.props.navigation.navigate('NewWorkout')}
        />
      )
    } else {
      return null
    }
  }

}

export default WorkoutContainer