import React from 'react'
import { Button, FlatList, Text, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'

// firebase
import { getWorkouts } from '../../actions/workouts'
import { allDivisions } from '../../actions/divisions'

// components
import WorkoutList from '../../components/WorkoutList'
import WorkoutFilter from '../../components/WorkoutFilter'


class AdminWorkouts extends React.Component {

  state = {
    workouts: undefined,
    filteredWorkouts: undefined,
    divisions: undefined,
    currentGender: undefined,
    currentDivision: 'RX',
  }

  componentWillMount() {
    getWorkouts().then((res) => {
      // default filter is RX Males
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
    if (this.state.filteredWorkouts && this.state.divisions) {
      return (
        <ScrollView>
          <WorkoutFilter
            gender={this.state.currentGender}
            divisions={this.state.divisions}
            selectedDivision={this.state.currentDivision}
            handleGenderFilter={this.handleGenderFilter}
            handleDivisionFilter={this.handleDivisionFilter}
          />

          <View style={styles.container}>
            <WorkoutList
              navigation={this.props.navigation}
              filteredWorkouts={this.state.filteredWorkouts}
              admin={true}
            />
          </View>
        </ScrollView>
      )
    } else {
      return (
        <Button
          title="Add Workout"
          onPress={() => this.props.navigation.navigate('NewWorkout')}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default AdminWorkouts