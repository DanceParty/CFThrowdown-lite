import React from 'react'
import { FlatList, Text, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'

// firebase
import { getWorkouts } from '../actions/workouts'
import { allDivisions } from '../actions/divisions'

class Workouts extends React.Component {

  state = {
    workouts: undefined,
    filteredWorkouts: undefined,
    divisions: undefined,
    currentGender: 'Male',
    currentDivision: 'RX',
  }

  componentWillMount() {
    getWorkouts().then((workoutsResult) => {
      // create Male filter
      const defaultFilteredWorkouts = workoutsResult.filter((workout) => {
        //console.log(workout)
        if (this.state.currentGender === 'Male') {
          return (workout.male) && (workout.division === this.state.currentDivision)
        } else if (this.state.currentGender === 'Female') {
          return (workout.female) && (workout.division === this.state.currentDivision)
        }
        return false
      })

      this.setState({
        workouts: workoutsResult,
        filteredWorkouts: defaultFilteredWorkouts,
      }, () => {
        allDivisions().then((divisionsResult) => {
          const divisionList = Object.keys(divisionsResult)
          this.setState({
            divisions: divisionList,
          })
        })
      })
    })
  }

  handleMaleFilter = () => {
    if (this.state.currentGender === 'Male') {
      return null
    } else {
      const filteredWorkouts = this.state.workouts.filter((workout) => {
        return (workout.male) && (workout.division === this.state.currentDivision)
      })
      this.setState({
        filteredWorkouts: filteredWorkouts,
        currentGender: 'Male',
      })
    }
  }

  handleFemaleFilter = () => {
    if (this.state.currentGender === 'Female') {
      return null
    } else {
      const filteredWorkouts = this.state.workouts.filter((workout) => {
        return (workout.female) && (workout.division === this.state.currentDivision)
      })
      this.setState({
        filteredWorkouts: filteredWorkouts,
        currentGender: 'Female',
      })
    }
  }

  handleDivisionFilter = (division) => {
    let fitleredWorkouts = []
    if (this.state.currentGender === 'Female') {
      filteredWorkouts = this.state.workouts.filter((workout) => {
        return (workout.female) && (workout.division === division)
      })
    } else if (this.state.currentGender === 'Male') {
      filteredWorkouts = this.state.workouts.filter((workout) => {
        return (workout.male) && (workout.division === division)
      })
    } else {
      return null
    }
    this.setState({
      currentDivision: division,
      filteredWorkouts: filteredWorkouts,
    })
  }

  render() {
    if (this.state.filteredWorkouts && this.state.divisions) {
      return (
        <ScrollView>
          <View style={styles.container}>

            <View>
              <Text>Gender Filters:</Text>
              <TouchableHighlight
                onPress={this.handleMaleFilter}
              >
                <Text style={ (this.state.currentGender === 'Male') && {color: 'red'}}>Men</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleFemaleFilter}
              >
                <Text style={ (this.state.currentGender === 'Female') && {color: 'red'}}>Women</Text>
              </TouchableHighlight>
            </View>

            <View>
              <Text>Division Filters:</Text>
              {
                this.state.divisions.map((division, index) => {
                  return (
                    <TouchableHighlight
                      onPress={() => this.handleDivisionFilter(division)}
                      key={index}
                    >
                      <Text
                        style={ (this.state.currentDivision === division) && { color: 'red'} }
                      >
                        {division}
                      </Text>
                    </TouchableHighlight>
                  )
                })
              }
            </View>

            <FlatList
              style={styles.list}
              data={this.state.filteredWorkouts}
              renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        </ScrollView>
      )
    } else {
      return null
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
  list: {
    margin: 10
  },
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default Workouts