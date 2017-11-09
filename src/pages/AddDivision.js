import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { addDivision } from '../actions/divisions'

class AddDivision extends React.Component {

  state = {
    name: '',
  }

  handleNameChange = (value) => {
    this.setState(() => ({
      name: value
    }))
  }

  submitDivisionForm = () => {
    const division = {
      name: this.state.name,
      workouts: [],
    }
    addDivision(division)
  }

  render() {
    return (
      <View>
        <Text>Add Division</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          placeholder="Name..."
          onChangeText={(text) => this.handleNameChange(text)}
          value={this.state.name}
        />
        <Button
          title="Submit"
          onPress={this.submitDivisionForm}
        />
      </View>
    )
  }
}

export default AddDivision