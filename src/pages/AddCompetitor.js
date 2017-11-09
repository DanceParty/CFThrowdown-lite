import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import { allDivisions } from '../actions/divisions'
import { getWorkoutsByDivision } from '../actions/workouts'

class AddCompetitor extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    division: '',
    scores: {},
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

  submitCompetitorForm = () => {
    // query workouts for this division
    getWorkoutsByDivision(this.state.division).then((result) => {
      console.log(result)
    })
    const competitor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      division: this.state.division,
      scores: this.state.scores,
    }
    // figure out which workouts are with this division

    // create an object of those workouts with values of ''

    // assign the state 'scores' to that object

    // create competitor
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
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          placeholder="Division..."
          onChangeText={(text) => this.handleDivisionChange(text)}
          value={this.state.fivision}
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