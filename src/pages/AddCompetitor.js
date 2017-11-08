import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

class AddCompetitor extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    division: '',
    scores: {},
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
    // figure out which workouts are with this division
    // create an object of those workouts with values of ''
    // assign the state 'scores' to that object
    // create competitor
    console.log(this.state)
  }

  render() {
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