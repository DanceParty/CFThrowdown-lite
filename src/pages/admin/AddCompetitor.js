import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

import { allDivisions } from '../../actions/divisions'
import { getWorkoutsByDivisionAndGender } from '../../actions/workouts'
import { addCompetitor } from '../../actions/competitors'

class AddCompetitor extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    division: '',
    male: false,
    female: false,
    divisionList: []
  }

  componentWillMount() {
    // get all divisions and assign them to the state
    allDivisions().then((result) => {
      const divisionList = Object.keys(result)
      this.setState(() => ({
        divisionList: divisionList
      }))
    })
  }

  handleFirstNameChange = (value) => {
    this.setState(() => ({
      firstName: value
    }))
  }

  handleLastNameChange = (value) => {
    this.setState(() => ({
      lastName: value
    }))
  }

  handleDivisionChange = (value) => {
    this.setState(() => ({
      division: value
    }))
  }

  handleMaleCheckbox = () => {
    this.setState(() => ({
      male: !this.state.male,
      female: false
    }))
  }

  handleFemaleCheckbox = () => {
    this.setState(() => ({
      female: !this.state.female,
      male: false
    }))
  }

  submitCompetitorForm = () => {
    const gender = this.state.male ? 'Male' : 'Female'
    // query workouts for this division
    getWorkoutsByDivisionAndGender(this.state.division, gender).then((result) => {
      if (result) {
        let scoresArray = []
        let index = -1
        // create score object for competitor
        result.map((workout) => {
          scoresArray[index += 1] = {
            workoutId: workout.id,
            points: 0,
            place: 100000,
          }
        })
        // create the competitor
        const competitor = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          division: this.state.division,
          male: this.state.male,
          female: this.state.female,
          scores: scoresArray,
          totalScore: 0,
        }
        addCompetitor(competitor)
      } else {
        // TODO:
        // add a competitor without the workouts scores since none returned
      }
    })
  }

  render() {
    const pickerData = this.state.divisionList.map((division, index) => {
      return {
        key: index,
        label: division,
      }
    })
    return (
      <View>
        <Text>Add Competitor</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          placeholder="First name..."
          onChangeText={(text) => this.handleFirstNameChange(text)}
          value={this.state.firstName}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          placeholder="Last name..."
          onChangeText={(text) => this.handleLastNameChange(text)}
          value={this.state.lastName}
        />
        <ModalSelector
          data={pickerData}
          initValue="Select a division"
          onChange={(value) => this.handleDivisionChange(value.label)}
        >
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 50 }}
            editable={false}
            placeholder="Select a division"
            value={this.state.division}
          />
        </ModalSelector>
        <CheckBox
          title="Male"
          checked={this.state.male}
          onPress={() => this.handleMaleCheckbox()}
        />
        <CheckBox
          title="Female"
          onPress={() => this.handleFemaleCheckbox()}
          checked={this.state.female}
        />
        <Button
          title="Submit"
          onPress={this.submitCompetitorForm}
        />
      </View>
    )
  }
}

export default AddCompetitor